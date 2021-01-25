import React, {useEffect, useContext} from 'react';
import useContent from '../hook/content';
import BookCard from './bookCard';
import {userContext} from '../context/userContext';

export default function Browse()
{
    const authUser = useContext(userContext);
    const { Books } = useContent("Books");
    
    return(
        <BookCard user={authUser} books={Object.values(Books)} />
    )
}