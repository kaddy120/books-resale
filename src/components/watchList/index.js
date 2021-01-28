import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { Watch } from './style/watchList';
import { useHistory } from 'react-router-dom';
import { firebase } from '../../lib/firebase';
import React from 'react';

//am going to need a book id, userId, and 
//use composite key for userid and book id, that way i can not watch one book twice
//
// how do i know if a user is already watching a book?????

export default function WatchList({ colour, user, BookId }) {

    const history = useHistory();
    function HandleWatch() {
        if (user) {
            //add a book to user watchlist
        }
        else {
            //redirect user to signin
            history.push("/sign-in");
        }
    }
//get all user watchlist_id, disable the button if the book_id is already a part of user watch list
    return (
        //FaHeart
        <Watch color="blue" type="button" onClick={HandleWatch}><FaRegHeart color="rgb(42, 145, 241)" /></Watch>
    )
}