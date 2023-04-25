import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../../Firebase/Firebase.config';

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();

const auth = getAuth(app);

const AuthProviders = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true); 

    const createUserWithEP = (email, password) => createUserWithEmailAndPassword(auth, email, password);

    const signInExistingUser = (email, password) => signInWithEmailAndPassword(auth, email, password);

    const signInWithGoogle = () => signInWithPopup(auth, googleProvider);

    const logOut = () => signOut(auth);

    // Set an authentication state observer and get user data
    useEffect( () => {

        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('current User: ', currentUser);
            setUser(currentUser);
            setLoading(false);
        });

        return () => unsubscribe();

    }, []);



    const userInfo = {
        user,
        loading,
        createUserWithEP,
        signInExistingUser,
        signInWithGoogle,
        logOut,
    };

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;