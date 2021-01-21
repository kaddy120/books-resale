import React from 'react';
import { Children } from 'react/cjs/react.production.min';
import {
    Container,
    Card,
    Image,
    Title,
    Price,
    Text,
    Watch
} from './style/book';

import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { IconContext } from "react-icons";

export default function Book({ children, ...restPros }) {
    return <Container {...restPros}>{children}</Container>
}

Book.Card = function BookCard({ children, ...restPros }) {
    return <Card {...restPros}>{children}</Card>
}

Book.Image = function BookCard({ ...restPros }) {
    return <Image {...restPros} />
}

Book.Title = function BookCard({ children, ...restPros }) {
    return <Title {...restPros}>{children}</Title>
}

Book.Price = function BookCard({ children, ...restPros }) {
    return <Price {...restPros}>{children}</Price>
}

Book.Text = function BookCard({ children, ...restPros }) {
    return <Text {...restPros}>{children}</Text>
}

// function BlueLargeIcon() {
//     return (
//       <IconContext.Provider
//         value={{ color: 'blue' }} >
//         <div>
          
//         </div>
//       </IconContext.Provider>
//     );
//   }
