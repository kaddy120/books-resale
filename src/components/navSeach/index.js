import React from 'react';
import {Form} from '../';

export default function NavSearch()
{
    //i need to pass the state of the home page
    //update it with the result

    function HandleSearch(event)
    {
        event.preventDefault();
    }
   return(
       <Form.Base onSubmit={HandleSearch}>
           <Form.Input />
           <Form.Button>Search</Form.Button>
       </Form.Base>
   )
}