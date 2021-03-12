import React, { useRef } from 'react';
import classes from './../TextInput/TextInput.module.css';

const TextInput = props => {
    const inputRef = useRef();

    return (
        <div className={classes.InputStyles}>
            <input type="text" ref={inputRef} autoFocus={true} />
            <button onClick={() => props.onsave(inputRef.current.value)} className={classes.AddButton}>Save</button>
            <button onClick={props.oncancel} className={classes.CancelButton}>X</button>
        </div>
    )
}

export default TextInput;