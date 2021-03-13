import React, { useState } from 'react';
import classes from './../TextInput/TextInput.module.css';

const TextInput = props => {
    const [inputValue, updateInputValue] = useState(props.value || "");

    return (
        <div className={classes.InputStyles}>
            <input type="text" value={inputValue} onChange={(e) => updateInputValue(e.target.value)} autoFocus={true} />
            <button onClick={() => props.onsave(inputValue)} className={classes.AddButton}>Save</button>
            <button onClick={props.oncancel} className={classes.CancelButton}>X</button>
        </div>
    )
}

export default TextInput;