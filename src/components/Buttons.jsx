import Button from "./util/Button";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
function ButtonComponent({
  children,
  color,
  bg,
  primary,
  negative,
  onClick,
  size,
}) {
  return (
    <StbuttonContainer>
      <h3>Buttons</h3>
      <h4>Primary Buton</h4>
      <StPrimaryBox>
        <Button
          color='large'
          bg='large'
          primary='true'
          size='large'
          onClick={() => alert("버튼을 만들어보세요")}>
          <FontAwesomeIcon icon={faLeaf} className='leaf' />
          Large Primary Button
        </Button>
        <Button color='medium' bg='medium' size='medium'>
          medium
        </Button>
        <Button color='small' bg='small' size='small'>
          small
        </Button>
      </StPrimaryBox>
      <h4>Negative Buton</h4>
      <StNegativeBox>
        <Button
          color='large'
          bg='large'
          negative='true'
          size='large'
          onClick={() => prompt("입력하기")}>
          <FontAwesomeIcon icon={faLeaf} className='leaf' />
          Large Negative Button
        </Button>
        <Button color='medium' bg='medium' size='medium'>
          medium
        </Button>
        <Button color='small' bg='small' size='small'>
          small
        </Button>
      </StNegativeBox>
    </StbuttonContainer>
  );
}

export default ButtonComponent;

const StbuttonContainer = styled.div`
  width: 650px;
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 0px 10px #eee;
  h3 {
    width: 100%;
    font-size: 35px;
    padding: 0;
    margin: 0;
    border-bottom: 2px solid #90b7fd;
    height: 10%;
    text-align: center;
  }
  h4 {
    font-size: 25px;
  }
`;

const StPrimaryBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  .leaf {
    margin-right: 10px;
  }
`;

const StNegativeBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  .leaf {
    margin-right: 10px;
  }
`;
