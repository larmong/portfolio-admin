import { useLocation } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { useState, useEffect, Key } from "react";
import { TableRowSelection } from "antd/es/table/interface";
import type { TableProps } from "antd";
import { Table } from "antd";

import { IPropsBoard } from "@components/board/type";
import { MembersDataType } from "@pages/members/type";
import { ProjectDataType } from "@pages/project/type";
import { DeleteBtn, Wrapper } from "@components/board/style";
import { isModalState, isPostsState } from "@store/store";

export default function Board({ data }: IPropsBoard) {
  const router = useLocation();
  const [selectedRowKeys, setSelectedRowKeys] = useState<Key[]>([]);
  const [route, setRoute] = useState<string>("");
  const setIsPost = useSetRecoilState<ProjectDataType>(isPostsState);
  const setIsModal = useSetRecoilState<boolean>(isModalState);

  useEffect(() => {
    setRoute(router?.pathname.split("/").slice(1)[0]);
  }, [route]);

  const columns = () => {
    const col: TableProps<MembersDataType | ProjectDataType>["columns"] = [];
    if (route === "members") {
      col.push(
        {
          title: "아이디",
          dataIndex: "userid",
          key: "userid",
        },
        {
          title: "이름",
          dataIndex: "name",
          key: "name",
          width: "15%",
        },
        {
          title: "닉네임",
          dataIndex: "nickname",
          key: "nickname",
          width: "15%",
        },
        {
          title: "연락처",
          dataIndex: "phone",
          key: "phone",
          render: (phone) =>
            phone.replace(
              /(^02.{0}|^01.{1}|[0-9]{3})([0-9]+)([0-9]{4})/,
              "$1-$2-$3"
            ),
          width: "15%",
        },
        {
          title: "레벨",
          dataIndex: "level",
          key: "level",
          width: "10%",
        },
        {
          title: "상태",
          dataIndex: "state",
          key: "state",
          render: (state) => {
            return state ? (
              <span>정상</span>
            ) : (
              <span style={{ color: "#a92323" }}>탈퇴</span>
            );
          },
          width: "10%",
        }
      );
    }
    if (route === "project") {
      col.push(
        {
          title: "썸네일",
          dataIndex: "thumb",
          key: "thumb",
          width: "10%",
          render: (thumb) => (
            <img
              style={{
                width: "50px",
                height: "50px",
                objectFit: "cover",
                border: "1px solid #eee",
              }}
              src={thumb}
              alt=""
            />
          ),
        },
        {
          title: "제목",
          dataIndex: "title",
          key: "title",
          render: (title) => <p style={{ textAlign: "left" }}>{title}</p>,
        },
        {
          title: "시작",
          dataIndex: "startDate",
          key: "startDate",
          width: "10%",
        },
        {
          title: "마감",
          dataIndex: "endDate",
          key: "endDate",
          width: "10%",
        },
        {
          title: "스킬",
          dataIndex: "skills",
          key: "skills",
          width: "25%",
          render: (skills) => (
            <div className="skills-group">
              {skills.map((el: string, index: number) => (
                <p key={index} className="skill">
                  {el}
                </p>
              ))}
            </div>
          ),
        },
        {
          title: "페이지",
          dataIndex: "view",
          key: "view",
          width: "15%",
          render: (view) => (
            <div className="view-button-group">
              <button
                className="view-button"
                onClick={() => {
                  window.open(view.code);
                }}
              >
                code
              </button>
              <button
                className="view-button"
                onClick={() => {
                  window.open(view.page);
                }}
              >
                view
              </button>
            </div>
          ),
        },
        {
          title: "디테일",
          dataIndex: "key",
          key: "key",
          width: "5%",
          render: (_, data: any) => (
            <button
              className="view-button"
              onClick={() => {
                setIsModal(true);
                setIsPost(data);
              }}
            >
              detail
            </button>
          ),
        }
      );
    }
    return col;
  };

  const rowSelection: TableRowSelection<MembersDataType | ProjectDataType> = {
    selectedRowKeys,
    onChange: (newSelectedRowKeys: Key[]) => {
      setSelectedRowKeys(newSelectedRowKeys);
    },
  };

  const handleDeleteData = () => {
    if (selectedRowKeys.length === 0) {
      window.alert("삭제할 데이터가 선택되지 않았습니다.");
      return;
    }
    console.log(selectedRowKeys); // document id 값
    console.log("삭제");
  };

  return (
    <Wrapper>
      <DeleteBtn onClick={handleDeleteData}>
        <span>Delete</span>
      </DeleteBtn>
      <Table
        rowSelection={rowSelection}
        dataSource={data}
        columns={columns()}
      />
    </Wrapper>
  );
}
