import React, { useState } from 'react';
import classes from "./../NewBoard/NewBoard.module.css";
import TextInput from "./../../../shared/TextInput/TextInput";

const NewBoard = props => {
    const [isInputVisible, toggleInputVisibility] = useState(false);

    const handleSaveBoard = title => {
        toggleInput();
        props.addBoard(title);
    }

    const toggleInput = () => {
        toggleInputVisibility(!isInputVisible);
    }

    const newBoardButton = (
        <div onClick={toggleInput} className={classes.BoardTitleStyles}>
            <h5>+ New Board</h5>
        </div>
    );

    return (
        <div className={classes.BoardStyles}>
            {
                isInputVisible ?
                    <TextInput onsave={handleSaveBoard} oncancel={toggleInput} /> :
                    newBoardButton
            }
        </div>
    )
}

export default NewBoard;