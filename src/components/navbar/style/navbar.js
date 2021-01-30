import styled from 'styled-components/macro';
import { Link as link } from 'react-router-dom';


export const Container = styled.div`
            height: 60px;
`;
export const Inner = styled.div`
    max-width: 1200px;
    height: 100%;
    margin: 0 auto;
    display: flex;  
    justify-content: space-between;
`;

export const NavContainer = styled.ul`
    display: flex;
    justify-content: space-between;
    height: 100%;
    list-style: none;
   
`;
export const MenuItem = styled.li`
     margin: auto 10px;
     padding-bottom: 3px;
     /* transition: border-bottom 0.1s; */
     &:hover{
         border-bottom: 2px solid #333;
     }

`;

export const Link = styled(link)`
        text-decoration: none;
        color: #333;       
`
