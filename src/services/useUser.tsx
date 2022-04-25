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
  const parties = await fetch(`${API_URL}/api/users/register/`, {
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
  return parties;
}
