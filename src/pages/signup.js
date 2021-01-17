import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form } from '../components';
import { FirebaseContext } from '../context/firebase';
import {firebase} from '../lib/firebase';

export default function Signin() {
    //const { firebase } = useContext(FirebaseContext);
    const history = useHistory();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    function handleSignup(event) {
        event.preventDefault();

        console.log('handleSubmit is called');

        return firebase.auth().createUserWithEmailAndPassword(emailAddress, password)
            .then((result) => {
                    result.user.updateProfile(
                        {
                            firstName: firstName,
                            lastName: lastName,
                        });
            }).then(
                () => {
                    history.push('./');
                }
            )
            .catch((error) => {
                // var errorCode = error.code;
                var errorMessage = error.message;
                console.log("signup error", errorMessage);
                // ..
            });
    }

    return (
        <Form>
            <Form.Title> Sign Up for MyApp</Form.Title>
            <Form.Base onSubmit={handleSignup} method="POST">
                <Form.Input type="text"
                    onChange={({ target }) => setFirstName(target.value)}
                    value={firstName}
                    placeholder="First name" />
                <Form.Input type="text"
                    onChange={({ target }) => setLastName(target.value)}
                    value={lastName}
                    placeholder="Last name" />
                <Form.Input type="email"
                    onChange={({ target }) => setEmailAddress(target.value)}
                    value={emailAddress}
                    placeholder="Email address" />
                <Form.Input type="password"
                    onChange={({ target }) => setPassword(target.value)}
                    value={password}
                    placeholder="password" />
                <Form.Button type="submit">Sign Up</Form.Button>
            </Form.Base>
        </Form>
    )
}