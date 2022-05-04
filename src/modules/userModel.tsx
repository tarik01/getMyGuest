export const getToken = () => {
  const token = localStorage.getItem('token');
  if (token) {
    return token;
  }
  return null;
};

export const isLogged = () => {
  const token = getToken();
  if (token) {
    return true;
  }
  return false;
};

export const saveAuthentication = (token: string, email: string) => {
  localStorage.clear();
  localStorage.setItem('token', token);
  localStorage.setItem('email', email);
};

export const redirectToLogin = () => {
  window.location.href = '/login';
};

export const authenticatedOrRedirectToLogin = () => {
  if (!isLogged()) {
    redirectToLogin();
  }
};
