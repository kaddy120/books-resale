import React from 'react';
import {Form} from '../components';

export default function Signin()
{
    function HandleSignin(event)
    {
        event.disableDefault();
    }
    
    return(
       <Form>
           <Form.Title> Sign in MyApp</Form.Title>
           <Form.Base onSubmit={HandleSignin}>
               <Form.Input type="email" placeholder = "Email address" />
               <Form.Input type="password" placeholder="password" />
               <Form.Button>Sign Up</Form.Button>
           </Form.Base>
       </Form>
    )
}