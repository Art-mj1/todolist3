import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import { styled } from "styled-components";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";

const ButtonStyle = styled.div`
  padding: 10px;
  width: 650px;
  border: 1px solid #ffffff;
  background: #ffffff;
  border-radius: 10px;
  height: 600px;
  box-shadow: 0px 0px 10px #eee;
  text-align: center;
  margin-top: 25px;
  .buttonsWrap {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .buttonsWrap > h3 {
    font-size: 45px;
    margin: 0;
    color: #90b7fd;
    font-weight: 800;
  }
  .buttonsWrap > .buttons {
    width: 100%;
  }
  .buttons > h4 {
    font-size: 30px;
  }
  .buttons > h4.border:after {
    content: "";
    display: block;
    width: 300px;
    border-bottom: 1px solid #90b7fd;
    margin: 10px auto;
  }
  .buttons > .buttonWrap {
    display: flex;
    margin-left: 55px;
  }
  .buttons > .buttonWrap > .large,
  .buttons > .buttonWrap > .large1 {
    background: #90b7fd;
    font-size: 17px;
    border: 1px solid #ffffff;
    color: #ffffff;
    border-radius: 15px;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .buttons > .buttonWrap > .large {
    width: 250px;
    height: 101px;
  }
  .buttons > .buttonWrap > .large > .leaf,
  .buttons > .buttonWrap > .large1 > .leaf {
    margin-right: 10px;
  }
  .buttons > .buttonWrap > .large1 {
    width: 250px;
    height: 101px;
  }
  .buttons > .buttonWrap > .large1 > input {
    border: none;
    background: none;
    height: 100%;
    color: #ffffff;
    font-size: 17px;
    font-weight: 600;
  }
  .buttons > .buttonWrap > .medium {
    height: 101px;
    width: 160px;
    border: 1px solid #90b7fd;
    background: #ffffff;
    border-radius: 10px;
  }
  .buttons > .buttonWrap > .small {
    height: 101px;
    width: 130px;
    border: 1px solid #ffffff;
    background: #adc2ea;
    border-radius: 10px;
  }
`;
const Buttons = () => {
  const alert1 = () => {
    alert("방문해주셔서 감사합니다");
  };
  const alert2 = () => {
    let greeting = prompt("입력하기", "");
    document.getElementsByClassName("result").innerText = greeting;
  };
  return (
    <ButtonStyle>
      <div className='buttonsWrap'>
        <h3>Button</h3>
        <div className='buttons'>
          <h4 className='border'>Primary Button</h4>
          <div className='buttonWrap'>
            <button className='large' onClick={alert1}>
              <FontAwesomeIcon icon={faLeaf} className='leaf' />
              <p>Large Primary Button</p>
            </button>
            <button className='medium'>medium</button>
            <button className='small'>small</button>
          </div>
        </div>
        <div className='buttons'>
          <h4 className='border' style={{ marginTop: 40 }}>
            Secondary Button
          </h4>
          <div className='buttonWrap'>
            <div className='large1'>
              <FontAwesomeIcon icon={faLeaf} className='leaf' />
              <input
                type='button'
                onClick={alert2}
                value='Large Secondary Button'
              />
            </div>
            <div className='result'></div>
            <button className='medium'>medium</button>
            <button className='small'>small</button>
          </div>
        </div>
      </div>
    </ButtonStyle>
  );
};

export default Buttons;
