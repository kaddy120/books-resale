import styled from 'styled-components/macro';

export const Container = styled.div`
    display: flex;
    overflow-y: scroll;
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

export const MainImageWrapper = styled.div`
    width: 100%;
    height: 500px;
`;

export const Image = styled.img`
    height: 100%;
    width: 100%;
    object-fit: contain;
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
export const Title = styled.h1`
font-size: 18px;
    font-weight: bold;
    color: black;
    line-height: normal;
    margin: 0;
    padding: 0;
    padding-bottom: 6px;
    display: inline;

`;

export const Text = styled.p``;

