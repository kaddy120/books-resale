import useUser from '../hook/user';
import {userContext} from './userContext';
import React from 'react';

export default function ProviderUse({ children }) {
    const { authUser } = useUser();
    console.log("from Provide User", authUser);
    return (<userContext.Provider value={authUser}>
        {children}
    </userContext.Provider>)
}



