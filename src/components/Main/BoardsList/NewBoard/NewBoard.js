import React from 'react';
import classes from "./../NewBoard/NewBoard.module.css";
import TextInput from "./../../../shared/TextInput/TextInput";

const Board = (props) => {
    return <div className={classes.BoardStyles}>
        {/* <div className={classes.BoardTitleStyles}>
            <h5>+ New Board</h5>
        </div> */}
            <TextInput />

    </div>
}

export default Board;