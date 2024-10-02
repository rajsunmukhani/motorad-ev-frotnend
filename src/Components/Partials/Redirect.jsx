import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Redirect = () => {
  const { token } = useParams(); // Extract the token from the route params
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      // Store the token in localStorage
      localStorage.setItem('token', token);
      // Redirect to /home after saving the token
      navigate('/home', { replace: true });
    }
  }, [token, navigate]);

  return null; // Render nothing during the redirection
};

export default Redirect;
