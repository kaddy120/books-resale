import React,{useContext, useState}from 'react';
import {Form} from '../components';
import {SelectOptions} from '../components/form';
import {userContext} from '../context/userContext';
import {storage, firebase} from '../lib/firebase';
import Catergories from '../fixtures/booksCategories.json'


// BookId: newPostKey,
//         Title: "A student's approach to income Tax",
//         Categoriy: "Business & Finance",
//         DatePosted: "2021-01-02",
//         Description: "this data is for testing seeding",
//         minPrice: "350",
//         Image: ["image4.png"],
//         State: "",
//         User_id: "FuWYurz0XQMcPq12cFre2PE7Zbr2",
//         BookId

export default function Sell()
{ 
    const {catergories} = Catergories; 

    const [book, setBook] = useState({
    Title: "",
    Category: "",
    Description: "",
    minPrice: "",
    Thumbnail: "",
    secondPicture: "",
    User_id: "",
    BookId:""
});

    const [url, setUrl] = useState("");

    const user = useContext(userContext);

    const HandleChange = (event) => {

            setBook({...book, [event.target.name]: event.target.value});
    }
    
    function HandleImage(event){
        if (event.target.files[0]) {
            setBook({...book, [event.target.name]: event.target.files[0]});
          }
    }
   
    function HandleSubmit(event)
    {
        event.preventDefault();
        console.log("handling submit")
        // const imageExtension = filename.split(".")[filename.split(".").length - 1];
        // // 32756238461724837.png
        // imageFileName = `${Math.round(
        //   Math.random() * 1000000000000
        // ).toString()}.${imageExtension}`;
    const uploadTask = storage.ref(`images/${book.Thumbnail.name}`).put(book.Thumbnail);
    uploadTask.on(
      "state_changed",
      snapshot => {
        console.log('Uploaded a blob or file!')
      },
      error => {
        console.log(error);
      },
      () => {
         storage
          .ref("images")
          .child(book.Thumbnail.name)
          .getDownloadURL()
          .then(url => {
            setUrl(url);
          });
          //console.log("url: ", url)
      }
    );

   var newPostKey = firebase.database().ref().child("Books").push().key;
   var updates = {};
   book.BookId = newPostKey;
   book.User_id = user.UID;
   updates['/Books/' + newPostKey] =  book;
    firebase.database().ref().update(updates);

    //create a user that need to be updated//
    }



    return (
        <Form>
            <Form.Base method="POST" onSubmit={HandleSubmit} >
             <Form.InputControl>
                 <Form.Label>Title</Form.Label>
                  <Form.Input type={"text"} onChange={HandleChange} name="Title" placeholder={"Book Name"}/>
             </Form.InputControl>
             <Form.InputControl>
                 <Form.Label>Description</Form.Label>
                  <Form.Input type="text" name="Description" onChange={HandleChange} placeholder="Book Name"/>
             </Form.InputControl>
             <Form.InputControl>
                 <Form.Label>Category</Form.Label>
                  <SelectOptions name="Category" onChange={HandleChange} options={catergories} />
             </Form.InputControl>
             <Form.InputControl>
                 <Form.Label>Minimum Price</Form.Label>
                  <Form.Input type="text" name="minPrice" onChange={HandleChange} placeholder="Book Name"/>
             </Form.InputControl>
             <Form.InputControl>
                 <Form.Label>Thumbnail</Form.Label>
                  <Form.Input type="file" accept="image/*" name="Thumbnail" onChange={HandleImage} placeholder="Book Name"/>
             </Form.InputControl>
             <Form.InputControl>
                 <Form.Label>other pictures</Form.Label>
                  <Form.Input type="file" accept="image/*" name="SecondPicture" onChange={HandleImage} placeholder="Book Name"/>
             </Form.InputControl>
             <Form.Button type="submit">Add book</Form.Button>
            </Form.Base>
            <img src={url} width="300px" />
        </Form>
    );
}