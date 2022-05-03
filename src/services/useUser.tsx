import { isJsonString } from '../util/util-fuctions';
import { API_URL } from './api';

export async function registerUser({
  email,
  password,
  confirmPassword,
}: {
  email: string;
  password: string;
  confirmPassword: string;
}) {
  const user = {
    email,
    password,
    confirmPassword,
  };
  const register = await fetch(`${API_URL}/api/users/register/`, {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(res => {
      if (res.ok) {
        return 'Registro realizado com sucesso!';
      }
      return res.text().then(text => {
        throw new Error(text);
      });
    })
    .catch(error => {
      throw new Error(error.message);
    });
  return register;
}

export async function LoginUser({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const user = {
    username: email,
    password,
  };
  const login = await fetch(`${API_URL}/api/users/auth/`, {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return res.text().then(text => {
        throw new Error(text);
      });
    })
    .catch(err => {
      if (isJsonString(err.message)) {
        const errorsFromApi = JSON.parse(err.message);
        if ('non_field_errors' in errorsFromApi) {
          throw new Error(errorsFromApi.non_field_errors[0]);
        }
      }
      throw new Error(
        'Não foi possível executar a requisição, tente novamente!',
      );
    });
  return login;
}
