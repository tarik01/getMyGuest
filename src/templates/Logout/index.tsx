import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../../context/user';

export default function Logout() {
  const navigate = useNavigate();
  const userContext = useContext(UserContext);

  useEffect(() => {
    userContext.setState({
      email: '',
      token: '',
    });
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    navigate('/login');
  }, [navigate, userContext]);
  return null;
}
