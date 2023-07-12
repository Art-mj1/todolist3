import React, { useState } from "react";
import ModalDialog from "../util/Modal";
import styled from "styled-components";
const ModalAfters = styled.div`
  width: 650px;
  border: 1px solid #90b7fd;
  background: #90b7fd;
  color: #ffffff;
  border-radius: 10px;
  height: 600px;
  box-shadow: 0px 0px 10px #eee;
  text-align: center;
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 50px;
  .modalAfter {
    width: 100%;
    font-size: 50px;
    text-align: center;
  }
  .modalAfter > h4 {
    font-size: 40px;
    color: #ffffff;
    font-weight: 800;
  }
  .modalAfter > button {
    background: #ffffff;
    color: #90b7fd;
    font-size: 17px;
    font-weight: 600;
    border: none;
    width: 165px;
    height: 53px;
  }
  .explain {
    font-size: 20px;
  }
`;
function SecondModal({ children }) {
  const [show, setShow] = useState("");

  const handleCloseModal = () => {
    setShow(false);
  };

  return (
    <ModalAfters>
      <div className='modalAfter'>
        <h4>SecondModal</h4>
        <button
          onClick={() => setShow(true)}
          color='rgb(0, 0, 0)'
          bg='rgb(255, 255, 255)'
          negative='true'
          size='large'>
          open modal
        </button>
        <ModalDialog isOpen={show} onClose={handleCloseModal}>
          <div className='explain'>
            닫기 버튼 1개가 있고, 외부 영역을 누르면 모달이 닫혀요.
          </div>
          <StbuttonBox
            onClick={() => {
              setShow(false);
            }}>
            X
          </StbuttonBox>
        </ModalDialog>
      </div>
    </ModalAfters>
  );
}

export default SecondModal;

const StbuttonBox = styled.button`
  position: absolute;
  top: 15px;
  right: 10px;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  border: 1px solid rgb(221, 221, 221);
  cursor: pointer;
`;
