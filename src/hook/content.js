import { firebase } from '../lib/firebase';
import { useState, useEffect } from 'react';

export default function useContent(target) {
    const [content, setContent] = useState([]);

    useEffect(() => {
        firebase.database()
            .ref(target).on('value', (snapshot) => {
                const allData = snapshot.val();
                setContent(allData);
                //don't lose the book keys, what if the owner of the book want to edit it
                //setContent(Object.values(allData));
            })
    },[])
    
    return {[target]: content};
}