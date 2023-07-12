import React, { useState } from "react";
import useInput from "../hook";
import { styled } from "styled-components";
const InputStyle = styled.div`
  width: 650px;
  border: 1px solid #ffffff;
  background: #ffffff;
  border-radius: 10px;
  height: 600px;
  box-shadow: 0px 0px 10px #eee;
  text-align: center;
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
  const [name, setName, resetName] = useInput("");
  const [price, setPrice, resetPrice] = useState(0);
  const priceHandler = (event) => {
    let price = event.target.value;
    price = Number(price.replaceAll(",", ""));
    if (isNaN(price)) {
      setPrice(0);
    } else {
      setPrice(price.toLocaleString("ko-KR"));
    }
  };
  const saveHandler = () => {
    alert(`이름: ${name}\n가격: ${price}`);
  };
  return (
    <InputStyle>
      <div className='inputs'>
        <h3>Inputs</h3>
        <div className='inputWraps'>
          <div className='inputWrap'>
            <div className='name'>
              <h4>이름</h4>
              <input type='text' value={name} onChange={setName} />
            </div>
            <div className='prices'>
              <h4>가격</h4>
              <input type='text' value={price} onChange={priceHandler} />
            </div>
          </div>
          <input type='button' value='저장' onClick={saveHandler} />
        </div>
      </div>
    </InputStyle>
  );
};

export default Input;
