import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Form } from '../components';
import { SelectOptions } from '../components/form';
import Univesities from '../fixtures/University.json';
import { firebase } from '../lib/firebase';
import {userContext} from '../context/userContext'

export default function Signup() {
    //const { firebase } = useContext(FirebaseContext);
    const history = useHistory();
    const [user, setUser] = useState(
        {
            firstName: "",
            lastName: "",
            emailAddress: "",
            university: "",
            password: "",
            Books:[]
        }
    );
    
    const [serveError, setServerError] = useState("")
    const [error, setError] = useState({
        firstName: "",
        lastName: "",
        emailAddress: "",
        university: "",
        password: ""
    });

    function HandleChange(event){
        console.log(event.target.name);
        setUser({...user, [event.target.name] : event.target.value})
    }

    function ValidInput()
    {
        
    }

    function handleSignup(event) {
        event.preventDefault();

        return firebase.auth().createUserWithEmailAndPassword(user.emailAddress, user.password)
            .then((result) => {
                result.user.updateProfile(
                    {
                        displayName: user.firstName
                    });
            }).then(() => {
                   const authUser = firebase.auth().currentUser;
                   console.log("user", authUser);
                    if(authUser){
                        var updates = {};
                        updates['/Users/'+ authUser.uid] = user;
                        console.log(updates);
                        firebase.database().ref().update(updates);

                        var actionCodeSettings = {
                            url: 'http://myapp.com/sell',
                          };

                        authUser.sendEmailVerification(actionCodeSettings).then(function() {
                            alert("varification email is sent")
                          }).catch(function(error) {
                              console.log("email not sent");
                            console.log(error.message)
                          });
                        //history.push('./');
                    }
                }
            )
            .catch((error) => {                
                var errorMessage = error.message;
                setServerError(errorMessage);
                console.log("signup error", errorMessage);
            });
    }
    const univesityNames = Univesities.map((item) => item.name)
    
    return (
        <Form>
            <Form.Title> Sign Up for MyApp</Form.Title>
            <Form.Card>
                <Form.Base onSubmit={handleSignup} method="POST">
                    <Form.Input type="text"
                        onChange={HandleChange}
                        value={user.firstName}
                        name="firstName"
                        placeholder="First name" />
                        <Form.Error>{error.firstName}</Form.Error>
                    <Form.Input type="text"
                        onChange={HandleChange}
                        value={user.lastName}
                        name="lastName"
                        placeholder="Last name" />
                    <Form.Error>{error.lastName}</Form.Error>
                    <Form.Input type="email"
                        onChange={HandleChange}
                        value={user.emailAddress}
                        name="emailAddress"
                        placeholder="Email address" />
                    <Form.Error>{error.emailAddress}</Form.Error>
                        <SelectOptions 
                        handle={HandleChange}
                        name="university"
                        options={univesityNames}
                        />
                    <Form.Error>{error.university}</Form.Error>
                    <Form.Input type="password"
                        onChange={HandleChange}
                        value={user.password}
                        name="password"
                        placeholder="password" />
                    <Form.Error>{error.password}</Form.Error>    
                    <Form.Button type="submit">Sign Up</Form.Button>
                </Form.Base>
            </Form.Card>
        </Form>
    )
}