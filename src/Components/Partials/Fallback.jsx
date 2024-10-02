import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Fallback = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            navigate('/home', { replace: true });
        } else {
            navigate('/login', { replace: true });
        }
    }, [navigate]);

    return null;
};

export default Fallback;
