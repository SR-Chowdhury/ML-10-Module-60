import React, { useContext } from 'react';
import { AuthContext } from '../components/Providers/AuthProviders';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return (
            <div className='container mx-auto text-center mt-40'>
                <progress className="progress w-56"></progress>
            </div>
        );

    }

    if (user) {
        return children;
    }

    return <Navigate to="/login" replace={true} />
};

export default PrivateRoute;