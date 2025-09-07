import { BsArrowUpRight } from "react-icons/bs";
import styled, { css } from "styled-components";
 

const ButtonBase = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  width: ${({ width }) => width || "164px"};
  height: 56px;
  padding: 16px 32px;

  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  ${({ variant }) =>
    variant === "primary" &&
    css`
      background: #080808f2;
      color: #fff;
      border: none;

      &:hover {
        opacity: 0.9;
      }
    `}

  ${({ variant }) =>
    variant === "secondary" &&
    css`
      background: #ffe9d9;
      color: #080808;
      border: 1px solid #08080866;

      &:hover {
        background: #ffd9c2;
      }
    `}
`;

const Button = ({ title, variant = "primary" }) => {
  return (
    <ButtonBase variant={variant}>
      {title}
      <BsArrowUpRight size={18} />
    </ButtonBase>
  );
};

export default Button;
