
import { isDisabled } from "@testing-library/user-event/dist/utils";
import { ButtonContainer } from "./styles";


interface IButtonProps {
  title: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  isDisabled: boolean;
}

const Button = ({ title, onClick }: IButtonProps) => {
  return <ButtonContainer onClick={onClick} disabled={!isDisabled}>{title} </ButtonContainer>;
};

export default Button;
