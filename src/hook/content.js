import { firebase } from '../lib/firebase';
import { useState, useEffect } from 'react';

export default function useContent(target) {
    const [content, setContent] = useState([]);

    useEffect(() => {
        firebase.database()
            .ref(target).on('value', (snapshot) => {
                const allData = snapshot.val();
                setContent(allData);
            })
    },[])
    
    return {[target]: content};
}