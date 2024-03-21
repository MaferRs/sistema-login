import Button from '../../Components/Button/Button';
import Input from '../../Components/Input/Input';
import { Container, Form } from './style';

const Login = () => {
  const handleSubmit = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    try {
      alert('Login');
    } catch (err) {
      alert('Algo deu errado: ' + err);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('digitando...', event.target.value);
  };
  return (
    <Container>
      <Form>
        <h1>Faça seu Login 👋</h1>
        <Input
          label="Email"
          name="email"
          placeholder="Digite o seu e-mail"
          onChange={handleChange}
          type="email"
        />
        <Input
          label="Senha"
          name="password"
          placeholder="Digite sua senha"
          onChange={handleChange}
          type="email"
        />
        <Button
          type="submit"
          onClick={handleSubmit}
          // disabled={!validateInput}
        >
          Entrar
        </Button>
        <div>
          <p>Não possui conta?</p>
          <a href="">Cadastrar</a>
        </div>
      </Form>
    </Container>
  );
};

export default Login;
