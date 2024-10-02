import React from 'react';
import { Navigate } from 'react-router-dom'; // Updated import for redirect

const ProtectedRoute = ({ children }) => {
    const isAuthenticated = !!localStorage.getItem('token'); // Check if token exists in localStorage

    // If authenticated, render the children (Dashboard in this case)
    // Otherwise, redirect to the login page
    return isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
