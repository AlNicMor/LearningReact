import React from 'react';
import {Form, FormGroup, ControlLabel, FormControl} from 'react-bootstrap';

const Search = ({value, onChange, children}) =>

    <form >
        <FormGroup>
        <ControlLabel>Search</ControlLabel>
        <FormControl
            type="text"
            value={value}
            onChange={onChange}
            />
            </FormGroup>
    </form>


export default Search;