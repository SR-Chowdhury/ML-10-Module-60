import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../../Firebase/Firebase.config';

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProviders = ({children}) => {

    const [user, setUser] = useState(null);

    const createUserWithEP = (email, password) => createUserWithEmailAndPassword(auth, email, password);

    const signInExistingUser = (email, password) => signInWithEmailAndPassword(auth, email, password);

    const logOut = () => signOut(auth);

    // Set an authentication state observer and get user data
    useEffect( () => {

        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            // console.log('current User: ', currentUser);
            setUser(currentUser);
        });

        return () => unsubscribe();

    }, []);



    const userInfo = {
        user,
        createUserWithEP,
        signInExistingUser,
        logOut,
    };

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;