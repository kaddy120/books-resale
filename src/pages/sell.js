import React, { useContext, useState } from 'react';
import { Form } from '../components';
import { SelectOptions } from '../components/form';
import { userContext } from '../context/userContext';
import { storage, firebase } from '../lib/firebase';
import Catergories from '../fixtures/booksCategories.json'
import { Image } from '../components/book/style/book';

export default function Sell() {
    const { catergories } = Catergories;

    const initBook = {
        Title: "",
        Category: "",
        Description: "",
        minPrice: "",
        Image: [],
        User_id: "",
        BookId: ""
    };
    const [book, setBook] = useState(initBook);
    const [inputList, setInputList] = useState([]);

    function onAddBtnClick() {
        if (inputList.length <= 4) {
            setInputList(inputList.concat(<Form.Input type="file"
                onChange={({ target }) => HandleImage(target.files[0])}
                accept="image/*" key={inputList.length} />));
        }
        else {
            alert("images can not exceed 6")
        }
    };

    const [thumbnail, setThumbnail] = useState([]);

    function HandleImage(file) {
        const container = thumbnail.slice();
        container.push(file);
        setThumbnail(container);
    }

    //const [secondPicture, setSecondPicture] = useState("");
    const user = useContext(userContext);

    const HandleChange = (event) => {
        console.log(event.target.name);
        setBook({ ...book, [event.target.name]: event.target.value });
    }

    function HandleSubmit(event) {
        event.preventDefault();

        thumbnail.forEach(image => {
            var uploadTask = storage.ref(`images/${image.name}`).put(image);
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
                        .child(image.name)
                        .getDownloadURL()
                        .then(url => {
                            book.Image.push(url);
                        });
                }
            );
        })

        console.log(book);
        
        // var newPostKey = firebase.database().ref().child("Books").push().key;
        // var updates = {};
        // book.BookId = newPostKey;
        // book.User_id = user.uid;
        // updates['/Books/' + newPostKey] = book;
        // firebase.database().ref().update(updates);
        // setBook(initBook);
        // setInputList([]);
        // setThumbnail([]);
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
                        handle={HandleChange}
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
                        onChange={({ target }) => HandleImage(target.files[0])}
                        placeholder="Book Name" />
                    {inputList}
                </Form.InputControl>
                <button type="button" disabled={thumbnail.length<1} onClick={onAddBtnClick}>+ another image</button>
                <Form.Button type="submit">Add book</Form.Button>
            </Form.Base>
        </Form>
    );
}