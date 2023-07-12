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
  .inputs {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
  .inputs > h3 {
    width: 100%;
    font-size: 35px;
    padding: 0;
    margin: 0;
    border-bottom: 2px solid #90b7fd;
    height: 10%;
    text-align: center;
  }
  .inputWraps {
    display: flex;
    height: 76%;
    align-items: center;
    justify-content: center;
  }
  .inputWrap {
    display: flex;
  }
  .name {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .prices {
    margin-left: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .inputWrap > button {
    width: 70px;
    height: 35px;
    background: #90b7fd;
    color: #ffffff;
    border: none;
    font-size: 15px;
    border-radius: 20px;
  }
  .inputStyle {
    border: 1px solid #adc2ea;
    border-radius: 20px;
    width: 150px;
    height: 35px;
    margin: 0 5px 0 5px;
  }
  h4 {
    font-size: 20px;
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
              <input
                type='text'
                value={name}
                onChange={setName}
                className='inputStyle'
              />
            </div>
            <div className='prices'>
              <h4>가격</h4>
              <input
                type='text'
                value={price}
                onChange={priceHandler}
                className='inputStyle'
              />
            </div>
          </div>
          <input type='button' value='저장' onClick={saveHandler} />
        </div>
      </div>
    </InputStyle>
  );
};

export default Input;
