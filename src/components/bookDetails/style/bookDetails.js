import styled from 'styled-components/macro';

export const Container = styled.div`
    display: flex;
`;

export const InnerLeft = styled.div`
display: flex;
flex-direction: column;
width: 50%;
`;

export const MainImage = styled.div``;

export const InnerRight = styled.section`
    width: 50%;
    display: flex;
    flex-direction: column;
    background-color: orange;
    padding: 10px;

`;

export const Image = styled.img`
    width: 100%;
`;

export const ImagesContainer = styled.ul`
    display: flex;
    margin: 20px auto;
    width: auto;
`;
export const ImageController = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 80px;
    //background-color: orange;
    border-radius: 2px;
    border: ${ ({clicked})=> clicked? "2px solid #777 ":
     "1px solid gray"}
`;

export const SImage = styled.img`
     vertical-align: middle;
     height: auto;
     width: 80px;
     overflow: hidden;

    
`;
export const Title = styled.h1``;

export const Text = styled.p``;

