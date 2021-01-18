import React, { useState } from 'react';
import { Form } from '../components';
import { firebase } from '../lib/firebase';


export default function Signin() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    function HandleSignin(event) {
        event.disableDefault();

        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(()=>{
            //i have to redirect to the right page;
        })
        .catch((err)=>{
            setError(err.message);
        })
    }


    function HandleSignin(event) {
        event.preventDefault();
    }

    return (
        <Form>
            <Form.Title> Sign in MyApp</Form.Title>
            <Form.Card>
                <Form.Base method="POST" onSubmit={HandleSignin}>
                    <Form.Input
                        onChange={({ target }) => setEmail(target.value)}
                        type="email"
                        placeholder="Email address" />
                    <Form.Input
                        onChange={({ target }) => setPassword(target.value)}
                        type="password"
                        placeholder="password" />
                    <Form.Button type="submit" marginTop={true} >Sign Up</Form.Button>
                </Form.Base>
            </Form.Card>
            <Form.Card>
                <Form.Text>New to the MyApp? <Form.Link to="/sign-up">Create an Account</Form.Link></Form.Text>
            </Form.Card>
        </Form>
    )
}