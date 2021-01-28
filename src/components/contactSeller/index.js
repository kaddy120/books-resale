import React, { useState } from 'react';
import firebase from '../../lib/firebase';
import {
    Container,
    Content,
    Button,
    Card,
    CloseButton
} from './style/contactSeller'

export default function ContactSeller({...restProps }) {

   
    const [open, setOpen] = useState(false);
    const [content, setContent] = useState("");

    function sendMessage(){
        //i will have to check if user is authenticated,
        //i should write a reusable helper method
        //....but for now:
        setOpen(!open);
        
    }

    return (
        <Container {...restProps}>
            <Button onClick={()=>sendMessage()} type="button">Contact the seller</Button>
            <MessageCard 
                open={open}
                setContent={setContent}
                setOpen={setOpen}
            />
        </Container>
    )
}

function MessageCard({ open, setContent, setOpen, ...restProps }) {
    return (
        open &&
        <Card>
            <CloseButton type="button" onClick={()=>setOpen(!open)}>X</CloseButton>
            <Content {...restProps} onChange={({ target }) => setContent(target.value)} />
            <Button type="button">Send</Button>
        </Card>
    )
}
