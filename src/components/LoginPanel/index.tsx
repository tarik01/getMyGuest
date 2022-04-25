import { useNavigate } from 'react-router-dom';
import { LoginContainer } from './styles';

export default function LoginPanel() {
  const navigate = useNavigate();
  return (
    <LoginContainer>
      <h1>Login</h1>
      <form>
        <input type="text" placeholder="E-mail" />
        <input type="password" placeholder="Senha" />
        <div className="buttons">
          <button type="button">
            <span>Entrar</span>
          </button>
          <button
            type="button"
            className="registerButton"
            onClick={() => {
              navigate('/register');
            }}
          >
            Registrar-se
          </button>
        </div>
      </form>
    </LoginContainer>
  );
}
