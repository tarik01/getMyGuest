import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../../services/useUser';
import { RegistrarContainer } from './styles';

export default function RegistrarPanel() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const navigate = useNavigate();

  const validateEmail = (email_: string) => {
    return String(email_)
      .toLowerCase()
      .match(
        // eslint-disable-next-line max-len
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      );
  };

  const handleRegister = async () => {
    setError('');
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
    if (password !== confirmPassword) {
      setError('As senhas devem ser iguais!');
    }
    const register = await registerUser({
      email,
      password,
      confirmPassword,
    }).catch(e => {
      //   const errorMsg = handleErrors(e.message);
      setError(e.message);
    });
    if (register) {
      setSuccess(register);
      setError('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    }
  };

  return (
    <RegistrarContainer>
      <h1>Registrar</h1>
      <form>
        <input
          type="text"
          value={email}
          placeholder="E-mail"
          onChange={event => setEmail(event.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={event => setPassword(event.target.value)}
        />
        <input
          type="password"
          value={confirmPassword}
          placeholder="Confirmar Senha"
          onChange={event => setConfirmPassword(event.target.value)}
        />
        <div className="buttons">
          <button type="button" onClick={() => handleRegister()}>
            <span>Registrar</span>
          </button>
          <button
            type="button"
            className="registerButton"
            onClick={() => {
              navigate('/login');
            }}
          >
            Já tenho cadastro
          </button>
        </div>
        {error && <div className="error">{error}</div>}
        {success && <div className="success">{success}</div>}
      </form>
    </RegistrarContainer>
  );
}
