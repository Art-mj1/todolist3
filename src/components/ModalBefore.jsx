import { useState } from "react";
import ModalDialog from "./Modal.jsx";
import { styled } from "styled-components";
const ModalBefores = styled.div`
  padding: 10px;
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
`;
export default function ModalBefore() {
  const [show, setShow] = useState(false);

  return (
    <ModalBefores>
      <div className='modalBefore'>
        <h4>Modal</h4>
        <button onClick={() => setShow(true)}>Open dialog</button>
        <ModalDialog isOpen={show}>
          Hello there!
          <br />
          <button
            onClick={() => {
              setShow(false);
            }}>
            Close
          </button>
        </ModalDialog>
      </div>
    </ModalBefores>
  );
}
