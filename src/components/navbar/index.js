import { NavContainer, MenuItem, Container, Inner, Link } from './style/navbar';


export default function Navbar({ children, ...restProps }) {
    return (
        <Container {...restProps}>
            <Inner>
                {children}
            </Inner>
        </Container>
    )
}

Navbar.Container = function NavLinkContainer({ children }) {
    return (<NavContainer>
        {children}
    </NavContainer>)
}

Navbar.Link = function Navbar({ children, ...restProps }) {
    return (<MenuItem>
            <Link {...restProps}>{children}</Link>
        </MenuItem>
    )
}

Navbar.Log = function NavbarLog({ children, ...restProps }) {
    return (
        <Link {...restProps}>{children}</Link>
    )
}