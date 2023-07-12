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
  .dropWrap {
    display: flex;
    margin: 0 14px 0 14px;
    border: 5px solid #90b7fd;
    width: 500px;
    height: 250px;
    overflow: hidden;
  }
  .dropDownContainer {
    width: 160px;
    margin: 10px auto;
    height: 400px;
  }
  .dropDownContainer:nth-child(1) {
    position: relative;
  }
  .selectOption {
    margin-bottom: 0.8em;
    padding: 0.4em 0em 0.4em 0em;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
    font-weight: 600;
    font-size: 1.3rem;
    color: #ffffff;
    background: #90b7fd;
    width: 160px;
    border: none;
  }
  .lists {
    padding: 0;
    margin: 0;
    background: #ffffff;
    border: 2px solid #adc2ea;
    box-sizing: border-box;
    color: #3faffa;
    font-size: 1.3rem;
    font-weight: 500;
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 160px;
    height: 330px;
    position: absolute;
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
    height: 100px;
  }
  #firstselectt {
    overflow: visible;
  }
`;

import React, { useState } from "react";

export default function Select() {
  const selectBox = {
    name: "select1",
    id: "firstselect",
    options: [
      { key: "리액트", value: "리액트" },
      { key: "자바", value: "자바" },
      { key: "스프링", value: "스프링" },
      { key: "리액트네이티브", value: "리액트네이티브" },
    ],
  };

  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (value) => {
    setSelected(value);
    setIsOpen(false);
  };

  return (
    <div className='dropWrap'>
      <div key={selectBox.name} className='dropDownContainer'>
        <button className='selectOption' onClick={toggleDropdown}>
          {selected || "리액트"}
        </button>
        {isOpen && (
          <div className='lists' id={selectBox.id}>
            {selectBox.options.map((item) => (
              <button
                key={item.key}
                className='list'
                onClick={() => selectOption(item.value)}>
                {item.value}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
