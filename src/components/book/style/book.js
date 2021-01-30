import styled from 'styled-components/macro';
import {Link} from 'react-router-dom';

export const Container = styled.div`

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 1200px;
    margin: 50px 40px;
    //margin: auto;
`;

//card is of type link
export const Card = styled(Link)`
    display: flex;
    flex-direction: column;
    margin: 10px;
    margin-bottom: 15px;
    max-width: 200px;
    text-decoration: none;
    //i will edit later;
    //color: black;
    height: 303px;
    width: 100%;
    background-color: white;
    padding: 20px 10px 10px 10px;
    overflow: hidden;
    border-radius: 4px;
    cursor: pointer;
    -webkit-box-direction: normal;
    -webkit-transition: border 300ms, -webkit-box-shadow 800ms;
    transition: border 300ms, -webkit-box-shadow 800ms;
    -o-transition: box-shadow 800ms, border 300ms;
    transition: box-shadow 800ms, border 300ms, transform 800ms;
    transition: box-shadow 800ms, border 300ms, -webkit-box-shadow 800ms;
    box-shadow: 1px 1px 8px 1px rgba(0, 0, 0, 0.1),
      -1px -1px 8px 1px rgba(0, 0, 0, 0.1) ;

    position: relative;
    &:hover{
        box-shadow: 4px 4px 8px 2px rgba(0, 0, 0, 0.1),
      -4px -4px 8px 2px rgba(0, 0, 0, 0.1) ;
      transform: scale(1.003);
    }



`;

export const Image = styled.img`
    border-style: none;
    width: 150px;
    align-self: center;
`;

export const Title = styled.p``;

export const Price = styled.p`
    font-weight: bold;
`;

export const Text = styled.p``;

