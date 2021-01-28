import React, { useState, useEffect, useContext} from 'react';
import { firebase } from '../../lib/firebase';
import {useHistory, useLocation } from 'react-router-dom';
import { Form, WatchList } from '../';
import {userContext} from '../../context/userContext';

import {
    Container,
    InnerLeft,
    InnerRight,
    Offering,
    Text,
    Price,
    LiteText,
    AddWatchWrapper
} from './style/bid'
import { Button } from '../form/style/form';

export default function Bid({ book, ...restProps }) {

    function nextMinOffer() {
    }

    const [bidError, setBidError] = useState(false);
    //container is grid
    return (
    <Container>
        <InnerLeft>
            Current Bid:
        </InnerLeft>
        <InnerRight>
            <Offering>
                <Price>
                    ZAR {book.CurrentBidPrice}
                </Price>
                <Text>
                    [{Object.values(book.Bids).length} bids]
            </Text>
            </Offering>
            <BidForm book={book} setBidError={setBidError} />
            <LiteText>Enter ZAR {book.MinBidPrice} or more</LiteText>
            <AddWatchWrapper>
                <div></div>
                <WatchList />
            </AddWatchWrapper>
        </InnerRight>
    </Container>
    //<p>Testing place bid</p>
    )

}

function BidForm({book, setBidError}) {

    const [bidOffer, setBitOffer] = useState("");
    const authUser = useContext(userContext);

    const history = useHistory();
    const location = useLocation();

    const handleSubmit = (event) => {
        //check if user is authenticated//
        //check if user has entered >= minoffer
        //if not, dispay error, 
        //else,,,
        //calculate what a next minBid should be,
        //
        event.preventDefault();
        if(bidOffer<book.MinBidOffer)
        {
            setBitOffer(true);
            return;
        }

        if(authUser ===null)
        {
            history.push({
                pathname: "/signin",
                state: {from: location}
            })
        }
        else{

        }
    }

    return (
        //form flex-direction 
        <Form.Base row onSubmit={(event) => handleSubmit(event)}>
            <Form.Input
             onChange={({target})=> setBitOffer(target.value)}
             value= {bidOffer}
             type="number" />
            <Button>Place bid</Button>
        </Form.Base>
    )

}