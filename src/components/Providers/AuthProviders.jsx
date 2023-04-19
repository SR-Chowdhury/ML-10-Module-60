import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../../Firebase/Firebase.config';

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProviders = ({children}) => {

    const [user, setUser] = useState('Shihan');

    const createUserWithEP = (email, password) => createUserWithEmailAndPassword(auth, email, password);

    const signInExistingUser = (email, password) => signInWithEmailAndPassword(auth, email, password);

    const userInfo = {
        user,
        createUserWithEP,
        signInExistingUser,
    };

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;