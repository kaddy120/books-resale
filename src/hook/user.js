import {firebase} from '../lib/firebase';
import {useState, useEffect} from 'react';

export default function useUser()
{
    const [User, setUser] = useState(JSON.parse(localStorage.getItem('authUser')));

    useEffect(()=>{
        const listener = firebase.auth().onAuthStateChanged(function(user){
            if(user){
                localStorage.setItem('authUser', JSON.stringify(user));
                setUser(user);
            }else{
                localStorage.removeItem('authUser');
                setUser(null);
            }
        })
    return ()=> listener();
    }   
    , []);

    return {authUser:User};
}

// const cat = localStorage.getItem('myCat');