import { useEffect, useState, Key } from "react";
import { Button, Table } from "antd";
import { TableRowSelection } from "antd/es/table/interface";
import type { TableProps } from "antd";

import { IPropsBoard, MembersDataType } from "@pages/members/type";
import { DeleteBtn, Wrapper } from "@components/board/style";

export default function Board({ data }: IPropsBoard) {
  const [selectedRowKeys, setSelectedRowKeys] = useState<Key[]>([]);
  const columns: TableProps<MembersDataType>["columns"] = [
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
    },
  ];

  const rowSelection: TableRowSelection<MembersDataType> = {
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
      <Table rowSelection={rowSelection} dataSource={data} columns={columns} />
    </Wrapper>
  );
}
