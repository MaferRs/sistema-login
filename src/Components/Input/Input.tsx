import { InputCustomized } from './styles';

type Props = {
  label: string;
  name: string;
  placeholder: string;
  type: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ label, ...props }: Props) => {
  return (
    <div>
      <label> {label}</label>
      <InputCustomized {...props} />
    </div>
  );
};

export default Input;
