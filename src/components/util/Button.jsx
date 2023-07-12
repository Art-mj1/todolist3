import styled, { css } from "styled-components";

export const Buttons = styled.div`
  cursor: pointer;
  color: ${(props) => props.color};

  ${(props) =>
    props.size === "large" &&
    css`
      height: 101px;
      width: 220px;
      font-size: 17px;
      font-weight: 600;
      background-color: #90b7fd;
      color: #ffffff;
      border-radius: 20px;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
    `};
  ${(props) =>
    props.size === "medium" &&
    css`
      height: 101px;
      width: 180px;
      font-weight: 500;
      background-color: rgb(255, 255, 255);
      border: 3px solid #90b7fd;
      color: #000;
      border-radius: 20px;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
    `};
  ${(props) =>
    props.size === "small" &&
    css`
      height: 101px;
      width: 150px;
      font-weight: 400;
      background-color: #adc2ea;
      color: #ffffff;
      border-radius: 20px;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
    `};
`;
function Button({ children, bg, color, primary, negative, onClick, size }) {
  return (
    <Buttons
      color={color}
      bg={bg}
      size={size}
      primary={primary}
      negative={negative}
      onClick={onClick}>
      {children}
    </Buttons>
  );
}
export default Button;
