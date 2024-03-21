import { ButtonCustomized } from './styles';

type Props = {
  type: 'submit' | 'button';
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  disabled?: boolean;
  children: React.ReactNode;
};

const Button = ({ type, ...props }: Props) => {
  return <ButtonCustomized {...props}>{props.children}</ButtonCustomized>;
};

export default Button;
