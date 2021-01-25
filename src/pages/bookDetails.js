import React from 'react';
import {firebase} from '../lib/firebase';
import {useParams} from 'react-router-dom';
import useContent from '../hook/content'
import DetailsContainer from '../container/bookDetails';
import {userContext} from '../context/userContext';


export default function BookDetail()
{
    const AuthUser = React.useContext(userContext);
    let { BookId } = useParams();

const [book, setBook] = React.useState(null)

React.useEffect(()=>{
    var starCountRef = firebase.database().ref('Books/' + BookId);
    starCountRef.on('value', (snapshot) => {
      const data = snapshot.val();
      setBook(data);
      console.log(book);
    });
}
, [])

return book? 
    (<DetailsContainer book = {book} user={AuthUser} />) :(<p>Loading...</p>) 
}