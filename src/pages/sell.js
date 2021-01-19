import React,{useContext, useState}from 'react';
import {Form} from '../components';
import {SelectOptions} from '../components/form';
import {userContext} from '../context/userContext';
import {firebase} from '../lib/firebase';
import Catergories from '../fixtures/booksCategories.json'

//add thumbnails, title, discription,
//addbooks container 


//let me make this a protect route

export default function Sell()
{ 
    const {catergories} = Catergories; 
    
    const [Category, setCategory] = useState('');
    //const [Books, setBook] = useState([]);
    const user = useContext(userContext);
    function HandleSelectCategory(value){
        setCategory(value);
    }
    // console.log(user);
    // function addBook(){
    // }

    // function submitBooks()
    // {

    // }

    // function removeBook()
    // {

    // }
    
    // function editBook()
    // {

    // }
    //console.log(catergories);
    return (
        <Form>
            <Form.Base  >
             <Form.InputControl>
                 <Form.Label>Title</Form.Label>
                  <Form.Input type={"text"} placeholder={"Book Name"}/>
             </Form.InputControl>
             <Form.InputControl>
                 <Form.Label>Description</Form.Label>
                  <Form.Input type="text" placeholder="Book Name"/>
             </Form.InputControl>
             <Form.InputControl>
                 <Form.Label>Category</Form.Label>
                  <SelectOptions HandleChange={HandleSelectCategory} options={catergories} />
             </Form.InputControl>
             <Form.InputControl>
                 <Form.Label>Minimum Price</Form.Label>
                  <Form.Input type="text" placeholder="Book Name"/>
             </Form.InputControl>
             {/* <Form.InputControl>
                 <Form.Label>Thumbnail</Form.Label>
                  <Form.Input type="image" placeholder="Book Name"/>
             </Form.InputControl>
             <Form.InputControl>
                 <Form.Label>Additional pictures</Form.Label>
                  <Form.Input type="image" placeholder="Book Name"/>
             </Form.InputControl> */}
            </Form.Base>
        </Form>
    );
}