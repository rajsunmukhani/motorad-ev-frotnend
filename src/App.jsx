import React from 'react';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import { Route, Routes } from 'react-router-dom';
import ProtectedRoute from './utils/Auth';
import Redirect from './Components/Partials/Redirect'; // Import your Redirect component
import Fallback from './Components/Partials/Fallback';

const App = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Signup />} />
                <Route path='/login' element={<Login />} />
                <Route path='/home/:token' element={<Redirect />} />
                <Route path='/home' element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
                <Route path="*" element={<Fallback />} />
            </Routes>
        </div>
    );
}

export default App;
