import styled from "styled-components";

interface IButtonContainerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
}

export const ButtonContainer = styled.button<IButtonContainerProps>`
  width: 100%;
  height: 42px;
  background-color: #81259d;
  color: #fff;
  border: 1px solid #81259d;
  border-radius: 21px;
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};

  &:hover {
    opacity: ${(props) => (props.disabled ? 0.6 : 0.8)};
  }
`;
