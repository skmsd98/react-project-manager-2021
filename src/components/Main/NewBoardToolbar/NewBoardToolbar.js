import React from 'react';
import AddBoardButton from './AddBoardButton/AddBoardButton';

const NewBoardToolbar = () => (
    <div style={toolbarStyles}>
        <span>My Boards</span>
        <AddBoardButton />
    </div>
);

const toolbarStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '5px',
    alignItems: 'center',
    borderBottom: '1px solid gray'
}

export default NewBoardToolbar;