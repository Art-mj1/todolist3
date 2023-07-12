import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { styled } from "styled-components";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
const Logo = styled.div`
  .logo-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .logo {
    display: flex;
    align-items: center;
    margin-left: 10px;
  }
  .logo > .leaf {
    font-size: 20px;
    color: #7c83b9;
  }
  .logo > h1 {
    margin-left: 10px;
    font-size: 40px;
    color: #7c83b9;
  }
  .design {
    margin-right: 10px;
    font-size: 25px;
    color: #7c83b9;
  }
  .design > h5 {
    margin-right: 40px;
  }
`;
const Header = () => {
  return (
    <Logo>
      <div className='logo-wrap'>
        <div className='logo'>
          <FontAwesomeIcon icon={faLeaf} className='leaf' />
          <h1>Mypage</h1>
        </div>
        <div className='design'>
          <h5>designed by minji</h5>
        </div>
      </div>
    </Logo>
  );
};

export default Header;
