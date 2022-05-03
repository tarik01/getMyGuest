import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../../context/user';
import { LoginUser } from '../../services/useUser';
import { LoginContainer } from './styles';
import { validateEmail } from '../../util/util-fuctions';

export default function LoginPanel() {
  const navigate = useNavigate();
  const userContext = useContext(UserContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (localStorage.getItem('token')) {
      navigate('/myaccount');
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setError('');
    e.preventDefault();
    if (email === '') {
      setError('Por favor, preencha o campo de e-mail.');
      return;
    }
    if (!validateEmail(email)) {
      setError('Por favor, preencha um e-mail válido.');
      return;
    }
    if (password === '') {
      setError('Por favor, preencha a senha.');
      return;
    }
    const user = {
      email,
      password,
    };
    const loginAction = await LoginUser(user).catch(err => {
      setError(err.message);
    });
    if (loginAction) {
      // eslint-disable-next-line no-console
      console.log(loginAction);
      userContext.setState({
        email,
        token: loginAction.token,
      });
      localStorage.clear();
      localStorage.setItem('token', loginAction.token);
      localStorage.setItem('email', email);
      navigate('/myaccount');
    }
  };

  return (
    <LoginContainer>
      <h1>Login</h1>
      <form onSubmit={e => handleSubmit(e)}>
        <input
          type="text"
          placeholder="E-mail"
          onChange={e => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Senha"
          onChange={e => {
            setPassword(e.target.value);
          }}
        />
        <div className="buttons">
          <button type="submit">
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
        {error && <div className="error">{error}</div>}
      </form>
    </LoginContainer>
  );
}
