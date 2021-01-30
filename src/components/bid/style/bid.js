import styled from 'styled-components/macro';
// Container,
// InnerLeft,
// InnerRight,
// Offering,
// Text,
// Price,
// LiteText,
// AddWatchWrapper

export const Container = styled.section`
    display: grid;
    // it's fine for now;
    background-color: #e2e2e2;
    max-width: 410px;
    max-height: 208px;
    grid-gap: 20px;
    grid-template-columns: 1fr 3fr;
    padding: 10px;
    margin-top: 12px
    //position: relative;
`;
export const InnerLeft = styled.div`
    display: flex;
    justify-content: flex-end;
`;

export const InnerRight = styled.div`
`;

export const Offering = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-bottom: 10px;
`;

export const Text = styled.p`
    font-size: 14px;
`;

export const Price = styled.h2`
    font-weight: 700;
    font-size: 16px;
`;

export const LiteText = styled.p`
    font-size: 12px;
    margin-top: 5px;
`;

export const AddWatchWrapper = styled.div`
     margin-top: 10px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
`;

export const Input = styled.input`
    padding: 4px 0px 4px 6px;
    width: 160px;
`;

export const Button = styled.button`
    padding: 4px 15px;
`;