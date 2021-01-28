import {Button} from './style/singout';
import {useHistory} from 'react-router-dom';


export default function Signout({children, Firebase})
{
    const history = useHistory();
    function HandleSignout()
    {
        Firebase.auth().signOut().then(() => {
            history.push("/")
            // Sign-out successful.
          }).catch((error) => {
            alert(error.message);
        });      
    }
    return(
    <Button onClick={HandleSignout}>{children}</Button>
    )
}