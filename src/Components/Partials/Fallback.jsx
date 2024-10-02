import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Fallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      // If token is present, redirect to the home page
      navigate('/home', { replace: true });
    } else {
      // If token is not present, redirect to the login page
      navigate('/login', { replace: true });
    }
  }, [navigate]);

  return null; // No UI for the fallback component, just handle redirection
};

export default Fallback;
