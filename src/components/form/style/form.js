import styled from 'styled-components/macro';
import { lightColour, primaryColour } from '../../../globalStyles/variables';
// import {Title, Container, Inner, Small, Error, Input, Button} from './style/form'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    height: 100vh;
    align-items: center;
`;

export const Card = styled.div`
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 3px 10px rgba(0,0,0, 0.2);
    padding: 20px;
    margin: 10px;
    //i will have to change this colour;
    color: black;
`;

export const Inner = styled.div`
    display: flex;
    max-width: 480px;
    flex-direction: column;
`;

export const Label = styled.label`
`;

export const Title = styled.h1`
    font-size: larger;
    font-weight: 700;
    margin-top: 5%;
    margin-bottom: 10px;
`;

export const Small = styled.p``;

export const Error = styled.p``;

export const Text = styled.p``;

export const Link = styled.a``;

export const Input = styled.input`
   font-size: 16px;
   padding: 10px;
   margin-top: 20px;

   &:focus{
        outline: none !important;
        border: 1px solid rgb(6, 111, 231);
        box-shadow: 0 0 6px #719ECE;
   }
`;

export const InputControl = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ErroSmall = styled.small``;

export const Base = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;  
    /* margin: auto; */

`;

export const Button = styled.button`
    width: 100%;
    border-radius: 6px;
    cursor: pointer;
    border: none;
    background-color: ${primaryColour};
    color: ${lightColour};
    font-size: medium;
    padding: 10px;
    transition: transform 0.3s;

    &:hover{
        transform: scale(0.985);
    }
`;

export const Select = styled.select``;

export const Option = styled.option``;