import React from 'react';
import TextField from 'material-ui/TextField';

const Search = ({value, onChange, children}) =>

    <form >
        <TextField
            type="text"
            value={value}
            onChange={onChange}
            />
    </form>


export default Search;