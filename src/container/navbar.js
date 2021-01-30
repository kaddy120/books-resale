import { NavSearch, Navbar, FilterByUni } from '../components';
import {Link} from 'react-router-dom';


export default function NavContainer() {
    return (
        <>
        <Navbar>
            <Navbar.Log exact to="/"><h1>MyApp</h1></Navbar.Log>
            {/* <NavSearch /> */}
            <Navbar.Container>
                <Navbar.Link to={"/sell"} >Sell</Navbar.Link>
                <Navbar.Link to={"/watchlist"}>Watchlist</Navbar.Link>
                <Navbar.Link to={"/messages"}>Messages</Navbar.Link>
                <Navbar.Link to={"/sign-in"}>Sign-In</Navbar.Link>
            </Navbar.Container>
        </Navbar>
        <NavSearch />
        <FilterByUni />
        </>
    )
}

