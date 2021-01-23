import React, { useContext, useState } from 'react';
import { Form } from '../components';
import { SelectOptions } from '../components/form';
import { userContext } from '../context/userContext';
import { storage, firebase } from '../lib/firebase';
import Catergories from '../fixtures/booksCategories.json';

export default function AddBook() {
    const { catergories } = Catergories;

    const initBook = {
        Title: "",
        Category: "",
        DatePosted: "",
        Description: "",
        minPrice: "",
        State: "",
        Image: [],
        User_id: "",
        BookId: ""
    };
    const [book, setBook] = useState(initBook);

    const [thumbnail, setThumbnail] = useState("");
    const [secondPicture, setSecondPicture] = useState("");

    const [url, setUrl] = useState("");

    const user = useContext(userContext);
    console.log(user);

    const HandleChange = (event) => {

        setBook({ ...book, [event.target.name]: event.target.value });
    }

    function HandleSubmit(event) {
        event.preventDefault();
        console.log("handling submit")

        var uploadTask = storage.ref(`images/${thumbnail.name}`).put(thumbnail);
        uploadTask.on(
            "state_changed",
            snapshot => {
            },
            error => {
                console.log(error);
            },
            () => {
                storage
                    .ref("images")
                    .child(thumbnail.name)
                    .getDownloadURL()
                    .then(url => {
                        book.Image[0] = url;
                    });
            }
        );

        uploadTask = storage.ref(`images/${secondPicture.name}`).put(secondPicture);
        uploadTask.on(
            "state_changed",
            snapshot => {
            },
            error => {
                console.log(error);
            },
            () => {
                storage
                    .ref("images")
                    .child(thumbnail.name)
                    .getDownloadURL()
                    .then(url => {
                        book.Image[1] = url;
                    });
            }
        );

       
        var newPostKey = firebase.database().ref().child("Books").push().key;
        var updates = {};
        book.BookId = newPostKey;
        book.User_id = user.uid;
        updates['/Books/' + newPostKey] = book;
        firebase.database().ref().update(updates);
        setBook(initBook);
        setThumbnail({});
        setSecondPicture({});
    }

    return (
        <Form>
            <Form.Base method="POST" onSubmit={HandleSubmit} >
                <Form.InputControl>
                    <Form.Label>Title</Form.Label>
                    <Form.Input
                        type={"text"}
                        onChange={HandleChange}
                        name="Title"
                        placeholder={"Book Name"} />
                </Form.InputControl>
                <Form.InputControl>
                    <Form.Label>Description</Form.Label>
                    <Form.Input
                        type="text"
                        value={book.Description}
                        name="Description"
                        onChange={HandleChange}
                        placeholder="Book Name" />
                </Form.InputControl>
                <Form.InputControl>
                    <Form.Label>Category</Form.Label>
                    <SelectOptions
                        name="Category"
                        value={book.Category}
                        onChange={HandleChange}
                        options={catergories} />
                </Form.InputControl>
                <Form.InputControl>
                    <Form.Label>Minimum Price</Form.Label>
                    <Form.Input 
                    type="number"
                    value={book.minPrice}
                     min="0" max="7000"
                      name="minPrice"
                       onChange={HandleChange}
                        placeholder="Book Name" />
                </Form.InputControl>
                <Form.InputControl>
                    <Form.Label>Thumbnail</Form.Label>
                    <Form.Input type="file"
                        accept="image/*"
                        name="Thumbnail"
                        onChange={({ target }) => setThumbnail(target.files[0])}
                        placeholder="Book Name" />
                </Form.InputControl>
                <Form.InputControl>
                    <Form.Label>other pictures</Form.Label>
                    <Form.Input type="file"
                        accept="image/*"
                        name="SecondPicture"
                        onChange={({ target }) => setSecondPicture(target.files[0])}
                        placeholder="Book Name" multiple/>
                </Form.InputControl>
                {/* <Form.Button onClick={}>+ photo</Form.Button> */}
                <Form.Button type="submit">Add book</Form.Button>
            </Form.Base>
        </Form>
    );
}