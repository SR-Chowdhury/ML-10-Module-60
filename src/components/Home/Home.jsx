import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';

const Home = () => {

    const {user} = useContext(AuthContext);

    return (
        <div>
            <h1>This is Home, <span>{user && user.email}</span></h1>
        </div>
    );
};

export default Home;