import { useEffect, useRef, useState } from "react";
import ModalDialog from "../util/Modal";
import { styled } from "styled-components";
const ModalBefores = styled.div`
  width: 650px;
  border: 1px solid #ffffff;
  background: #ffffff;
  border-radius: 10px;
  height: 600px;
  box-shadow: 0px 0px 10px #eee;
  text-align: center;
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .modalBefore {
    width: 100%;
    font-size: 50px;
    text-align: center;
  }
  .modalBefore .open {
    width: 165px;
    height: 53px;
    border: none;
  }
  .modalBefore > h4 {
    font-size: 40px;
    color: #90b7fd;
    font-weight: 800;
  }
  .modalBefore > button {
    background: #90b7fd;
    color: #ffffff;
    font-size: 17px;
    font-weight: 600;
    border: none;
    width: 165px;
    height: 53px;
  }
  .modalBefore .buttons {
    display: flex;
  }
  .modalBefore button {
    background: #90b7fd;
    color: #ffffff;
    font-size: 14px;
    border: none;
    width: 70px;
    height: 30px;
  }
  .modalBefore .confirm {
    margin-left: 10px;
  }
`;
export default function FirstModal({ children }) {
  const [show, setShow] = useState("");
  const modalBackdropHandler = () => {};
  return (
    <ModalBefores>
      <div className='modalBefore' onClick={modalBackdropHandler}>
        <h4>Modal</h4>
        <button className='open' onClick={() => setShow(true)}>
          Open
        </button>
        {show && (
          <ModalDialog isOpen={show} onClose={() => setShow(true)}>
            <div>외부영역을 눌러도 닫히지 않음.</div>
            <br />
            <div className='buttons'>
              <button onClick={() => setShow(false)}>Close</button>
              <button
                onClick={() => setShow(true)}
                color='rgb(0, 0, 0)'
                bg='rgb(200, 19, 196)'
                size='small'
                className='confirm'>
                확인
              </button>
            </div>
          </ModalDialog>
        )}
      </div>
    </ModalBefores>
  );
}
