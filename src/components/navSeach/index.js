import React from 'react';
import { FaSistrix } from 'react-icons/fa'
import { SelectOptions } from '../form/index';
import {
    Input,
    Button,
    FormGroup,
    SelectorGroup
} from './style/navSearch';

import Categoris from '../../fixtures/booksCategories.json'

export default function NavSearch() {
    //i need to pass the state of the home page
    //update it with the result

    function HandleSearch(event) {
        event.preventDefault();
    }
    return (
        <FormGroup onSubmit={HandleSearch}>
            <Input placeholder="Book title" />
            <SelectorGroup >
                <SelectOptions width={"100%"} height={"100%"} options={Categoris} />
            </SelectorGroup>
            <Button><FaSistrix /></Button>
        </FormGroup>
    )
}
