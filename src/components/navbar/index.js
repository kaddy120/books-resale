import {NavContainer, MenuItem, Container} from './style/navbar';
import {Link} from 'react-router-dom';

export default function Navbar({ children, ...restProps }) {
    return (
        <Container {...restProps}>{children}</Container>
    )
}

Navbar.Container = function NavLinkContainer({ children }) {
    return (<NavContainer>
        {children}
    </NavContainer>)
}

Navbar.Link = function Navbar({ children, ...restProps }) {
    return (
        <MenuItem>
            <Link {...restProps}>{children}</Link>
        </MenuItem>
    )
}