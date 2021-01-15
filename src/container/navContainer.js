import { NavSearch, Navbar } from '../components';
import {Link} from 'react-router-dom';

export default function NavContainer() {
    return (
        <Navbar>
            <Link exact to="/"><h1>MyApp</h1></Link>
            <NavSearch />
            <Navbar.Container>
                <Navbar.Link to={"/sell"} >Sell</Navbar.Link>
                <Navbar.Link to={"/watchlist"}>Watchlist</Navbar.Link>
                <Navbar.Link to={"/messages"}>Messages</Navbar.Link>
                <Navbar.Link to={"/sign-in"}>Sign-In</Navbar.Link>
            </Navbar.Container>
        </Navbar>
    )
}

