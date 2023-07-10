import React from "react";
import styled from "styled-components";

const StyledButton = () => {
  const getButtonStyle = () => {
  
  };
  return (
    <button style={getButtonStyle()}>
      Button
    </button>
  );
}

export default StyledButton;



const Button: React.FC<ButtonProps> = (props) => {
  const { onClick, title, type, color, size } = props;

  return (
    <MyButton onClick={onClick} color={color} size={size} type={type}>
      {title}
    </MyButton>
  );
};
export default Button;
