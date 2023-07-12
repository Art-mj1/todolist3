import React, { useState } from "react";
import { styled } from "styled-components";

const Selects = styled.div`
  width: 650px;
  border: 1px solid #ffffff;
  background: #ffffff;
  border-radius: 10px;
  height: 600px;
  box-shadow: 0px 0px 10px #eee;
  text-align: center;
  margin-top: 25px;
  display: flex;
  align-items: center;
  justify-content: center;

  .dropDownContainer {
    width: 160px;
    margin: 0 auto;
    height: 500px;
  }
  .selectOption {
    margin-bottom: 0.8em;
    padding: 0.4em 0em 0.4em 0em;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
    font-weight: 600;
    font-size: 1.3rem;
    color: #3faffa;
    background: #ffffff;
    width: 160px;
  }
  .lists {
    padding: 0;
    margin: 0;
    background: #ffffff;
    border: 2px solid #e5e5e5;
    box-sizing: border-box;
    color: #3faffa;
    font-size: 1.3rem;
    font-weight: 500;
    display: flex;
    flex-direction: column;
    text-align: center;
    &:first-child {
      padding-top: 0.2em;
    }
  }
  .list {
    list-style: none;
    margin-bottom: 0.8em;
    text-align: center;
  }
  .lists > button {
    border: none;
    background: none;
  }
`;

export default function Select() {
  const [options, setOptions] = useState({
    select1: false,
    select2: false,
    // 추가적인 selectbox 상태 추가 가능
  });

  const [content, setContent] = useState({
    select1: "",
    select2: "",
    // 추가적인 selectbox 값 상태 추가 가능
  });

  const onClickOptionsHandler = (selectName) => {
    setOptions((prevOptions) => ({
      ...prevOptions,
      [selectName]: !prevOptions[selectName],
    }));
  };
  const onClickHandler = (selectName, value) => {
    setContent({
      ...content,
      [selectName]: value,
    });
  };

  const selectBoxes = [
    {
      name: "select1",
      options: [
        { key: "리액트", value: "리액트" },
        { key: "자바", value: "자바" },
        { key: "스프링", value: "스프링" },
        { key: "리액트네이티브", value: "리액트네이티브" },
      ],
    },
    {
      name: "select2",
      options: [
        { key: "리액트", value: "리액트" },
        { key: "자바", value: "자바" },
        { key: "스프링", value: "스프링" },
        { key: "리액트네이티브", value: "리액트네이티브" },
      ],
    },
  ];

  return (
    <Selects>
      {selectBoxes.map((selectBox) => (
        <div key={selectBox.name} className='dropDownContainer'>
          <button
            className='selectOption'
            onClick={() => onClickOptionsHandler(selectBox.name)}>
            {content[selectBox.name] || "리액트"}
          </button>
          {options[selectBox.name] && (
            <div className='lists'>
              {selectBox.options.map((item) => (
                <button
                  key={item.key}
                  className={"list"}
                  onClick={() => onClickHandler(selectBox.name, item.value)}>
                  {item.value}
                </button>
              ))}
            </div>
          )}
        </div>
      ))}
    </Selects>
  );
}
