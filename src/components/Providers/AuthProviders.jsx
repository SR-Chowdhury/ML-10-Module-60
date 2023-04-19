import React, { createContext, useState } from 'react';

export const AuthContext = createContext(null);

const AuthProviders = ({children}) => {

    const [user, setUser] = useState('Shihan');

    const userInfo = {
        user,
    };

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;