import React from 'react';
import {
    Container,
    Card,
    Image,
    Title,
    Price,
    Text,
    Watch
} from './style/book';

export default function Book({ children, ...restPros }) {
    return <Container {...restPros}>{children}</Container>
}

Book.Card = function BookCard({ children, ...restPros }) {
    return <Card {...children}>{children}</Card>
}

Book.Image = function BookCard({ children, ...restPros }) {
    return <Image {...children}>{children}</Image>
}

Book.Title = function BookCard({ children, ...restPros }) {
    return <Title {...children}>{children}</Title>
}

Book.Price = function BookCard({ children, ...restPros }) {
    return <Price {...children}>{children}</Price>
}

Book.Text = function BookCard({ children, ...restPros }) {
    return <Text {...children}>{children}</Text>
}

//it some sort of a button with a state, that depends on a book that a user is either watching or not;
Book.Watch = function BookCard({ children, ...restPros }) {
    return <Watch {...children}>{children}</Watch>
}
