import React, { useState } from 'react';
import Modal from './../../../../Utilities/Modal/Modal';

const AddBoardButton = () => {
    const [isModalOpen, toggleModal] = useState(false);

    function handleModalToggle() {
        toggleModal(!isModalOpen);
    }

    return (
        <>
            <button onClick={handleModalToggle} style={buttonStyles}>+ New Board</button>
            {
                isModalOpen &&
                <Modal closed={handleModalToggle} height="400px" width="500px">
                    <h1>Ticket Details</h1>
                    <h4>Title</h4>
                    <input type="text" />
                    <h4>Description</h4>
                    <input type="text" />
                </Modal>
            }
        </>
    )
};

const buttonStyles = {
    padding: '10px 20px',
    backgroundColor: 'slategray',
    color: 'white',
    border: 'none',
    outline: 'none',
    cursor: 'pointer'
}

export default AddBoardButton;