import React from 'react';
import {Form} from '../components';

export default function Signin()
{
    return(
       <Form>
           <Form.Title> Sign Up for MyApp</Form.Title>
           <Form.Base>
               <Form.Input type="text" placeholder = "First name" />
               <Form.Input type="text" placeholder = "Last name" />
               <Form.Input type="email" placeholder = "Email address" />
               <Form.Input type="password" placeholder="password" />
               <Form.Button>Sign Up</Form.Button>
           </Form.Base>
       </Form>
    )
}