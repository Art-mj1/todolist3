import React from "react";
import useInput from "../hook";
import { styled } from "styled-components";
const InputStyle = styled.div`
  padding: 10px;
  width: 650px;
  border: 1px solid #ffffff;
  background: #ffffff;
  border-radius: 10px;
  height: 600px;
  box-shadow: 0px 0px 10px #eee;
  text-align: center;
  margin-top: 25px;
  margin-left: 50px;
  .inputWraps {
    display: flex;
  }
  .inputWrap {
    display: flex;
  }
  .name {
    display: flex;
  }
  .prices {
    display: flex;
  }
`;
const Input = () => {
  const [name, setName] = useInput("");
  const [price, setPrice] = useInput("");

  return (
    <InputStyle>
      <div className='inputs'>
        <h3>Inputs</h3>
        <div className='inputWraps'>
          <div className='inputWrap'>
            <div className='name'>
              <h4>이름</h4>
              <input type='text' />
            </div>
            <div className='prices'>
              <h4>가격</h4>
              <input type='text' />
            </div>
          </div>
          <input type='button' value='저장' />
        </div>
      </div>
    </InputStyle>
  );
};

export default Input;
