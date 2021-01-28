import styled from 'styled-components/macro';

// Container,
// Content,
// Button,
// Card

export const Container = styled.div`
  max-width: 410px;

`;

export const Card = styled.div`
  background-color: white;
  max-width: 300px;
  border-radius: 5px;
  padding: 15px;
  position: relative;
  margin-top: 15px;
`;


export const Content = styled.textarea`
 display: block;
 width: 100%;
 height: 55px;
 margin: 10px auto;
 margin-top: 20px;
 padding: 10px;
 border-radius: 4px;
`;

export const Button = styled.button``;

export const CloseButton = styled.button`
    background-color: transparent;
    border: none;
    position: absolute;
    right: 15px;
    top: 10px;
`;