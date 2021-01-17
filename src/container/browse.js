import React, {useEffect} from 'react';
import useContext from '../hook/content';
import BookCard from './bookCard';

export default function Browse()
{
    const { Books } = useContext("Books");
    console.log(Books);

    useEffect(() => {
        console.log("render");
        return () => {
            console.log("unmount")
        }
    }, [Books])

    return(
        <BookCard books={Object.values(Books)} />
    )
}