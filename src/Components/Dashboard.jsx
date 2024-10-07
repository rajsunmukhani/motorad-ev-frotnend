import '@fortawesome/fontawesome-free/css/all.min.css';
import Nav from './Partials/Nav';
import CardWallet from './Partials/CardWallet';
import Logout from './Partials/Logout';
import { jwtDecode } from 'jwt-decode';
import { useEffect, useState } from 'react';
import SingleCardViewer from './Partials/SingleCardViewer';

const Dashboard = () => {
    const [user, setUser] = useState({ name: '', avatar: '' });
    const [selectedCard, setSelectedCard] = useState(null); // Add state for selected card

    useEffect(() => {
        const token = localStorage.getItem('token'); // Retrieve the token from localStorage

        if (token) {
            try {
                const decoded = jwtDecode(token); 
                setUser({
                    name: decoded.name,
                    avatar: decoded.avatar,
                });
            } catch (error) {
                console.error('Token decoding failed:', error);
            }
        }
    }, []);

    return (
        <div className='w-full bg-[#223243] h-screen flex'>
            <Nav avatar={user.avatar.url} />
            <CardWallet name={user.name} setSelectedCard={setSelectedCard} />
            <SingleCardViewer selectedCard={selectedCard} />
        </div>
    );
};

export default Dashboard;
