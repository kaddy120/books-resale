import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Form } from '../components';
import { SelectOptions } from '../components/form';
import Univesities from '../fixtures/University.json';
import { firebase } from '../lib/firebase';
import {userContext} from '../context/userContext'

const initUser = {
    firstName: "",
    lastName: "",
    emailAddress: "",
    university: "",
    password: "",
    Books:[]
}

export default function Signup() {
    //const { firebase } = useContext(FirebaseContext);
    const history = useHistory();
    const [user, setUser] = useState(initUser);
    
    console.log("run component from the beginning")
    const [serveError, setServerError] = useState("")
    const [error, setError] = useState({
        firstName: "",
        lastName: "",
        emailAddress: "",
        university: "",
        password: ""
    });

    function HandleChange(event){
        setUser({...user, [event.target.name] : event.target.value})
    }

    // function InputsAreValid(user)
    // {
    // let isValid = true;

    // var regName = /^[a-z]+$/i;

    // if (!regName.test(user.firstName) || true) {
    //      setError({firstName: "Invalide first name" });
    //      console.log(1);
    //   isValid = false;
    // }
    // if (!regName.test(user.lastName) || true) {
    //     setError({...error, lastName: "Invalide last name" }, function(){
    //         console.log(2);
    //     });
    //   isValid = false;
    // }
    // if (user.password.length < 6) {
    //     setError({...error, password: "Password should have at least 6 characters"});
    //     console.log(3);
    //   isValid = false;
    // }
    // if (!validateEmail(user.emailAddress)) {
    //     setError({...error, emailAddress: "Enter a valide email address" });
    //   isValid = false;
    // }
    // console.log(error)
    //  return isValid;

    // }

    function handleSignup(event) {
        event.preventDefault();
        let isValid = true;

    var regName = /^[a-z]+$/i;

    if (!regName.test(user.firstName) || true) {
         setError({firstName: "Invalide first name" });
         console.log(1);
      isValid = false;
    }
    if (!regName.test(user.lastName) || true) {
        setError({...error, lastName: "Invalide last name" }, function(){
            console.log(2);
        });
      isValid = false;
    }
    if (user.password.length < 6) {
        setError({...error, password: "Password should have at least 6 characters"});
        console.log(3);
      isValid = false;
    }
    if (!validateEmail(user.emailAddress)) {
        setError({...error, emailAddress: "Enter a valide email address" });
      isValid = false;
    }
        if(!isValid) 
        {
               console.log(error);
               return;} 

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

                        //what i need is a working domain to redirect, i think it's working
                        var actionCodeSettings = {
                            url: 'http://myapp.com/sell',
                          };

                        authUser.sendEmailVerification().then(function() {
                            alert("varification email is sent")
                          }).catch(function(error) {
                              console.log("email not sent");
                            console.log(error.message)
                          });
                          //i should push to the page that tells the user to verify their email. 
                          //if user is not verified, i will treat it as if it's unauthenticated
                        history.push('./');
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
                        required 
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

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }