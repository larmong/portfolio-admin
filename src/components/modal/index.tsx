import { useEffect, useRef } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { IoMdClose } from "react-icons/io";
import { RiPagesFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";

import {
  BtnGroup,
  CloseBtn,
  ImgBox,
  ModalContainer,
  TagGroup,
  TextCont,
  TitleWrapper,
  Wrapper,
} from "@components/modal/style";
import { CustomMouseEvent } from "@commons/types/global.types";
import { ProjectDataType } from "@pages/project/type";
import { isModalState, isPostsState } from "@store/store";

export default function Modal() {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const isPost = useRecoilValue<ProjectDataType>(isPostsState);
  const [isModal, setIsModal] = useRecoilState<boolean>(isModalState);

  const handleCloseModal = (e: CustomMouseEvent) => {
    if (modalRef && e.target === modalRef.current) {
      setIsModal(false);
    }
  };

  useEffect(() => {
    if (isModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isModal]);

  return (
    <Wrapper ref={modalRef} isModal={isModal} onClick={handleCloseModal}>
      <ModalContainer isModal={isModal}>
        <div className="top-cont">
          <TitleWrapper>
            <span>{isPost?.categoryId}</span>
            <p>{isPost?.title}</p>
          </TitleWrapper>
          <CloseBtn
            onClick={() => {
              setIsModal(false);
            }}
          >
            <IoMdClose />
          </CloseBtn>
        </div>
        <div className="center-cont">
          <ImgBox
            style={{
              backgroundImage: `url('${isPost?.thumb}')`,
            }}
          ></ImgBox>
        </div>
        <div className="bottom-cont">
          <BtnGroup>
            <div className="code" onClick={() => window.open(isPost.view.code)}>
              <FaGithub />
              <span>CODE</span>
            </div>
            <div className="view" onClick={() => window.open(isPost.view.page)}>
              <RiPagesFill />
              <span>VIEW</span>
            </div>
          </BtnGroup>
          <TagGroup>
            {isPost?.skills?.map((skill: string, idx: number) => (
              <li key={`${skill}_${idx}`}>
                <span className="tag-el">{skill}</span>
              </li>
            ))}
          </TagGroup>

          <TextCont>
            <ul>
              <li className="optimization">
                {isPost?.cont.optimization.map(
                  (optimization: string, idx: number) => (
                    <span key={`${optimization}_${idx}`}>{optimization}</span>
                  )
                )}
              </li>
              <li>{isPost?.cont.percent}</li>
              <li>
                {isPost?.startDate === isPost?.endDate
                  ? isPost?.startDate
                  : `${isPost?.startDate} ~ ${isPost?.endDate}`}
              </li>
              <li>{isPost.cont.unit}</li>
              <li className="dec">{isPost?.dec}</li>
            </ul>
          </TextCont>
        </div>
      </ModalContainer>
    </Wrapper>
  );
}
