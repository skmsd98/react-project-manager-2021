import React, { useState } from 'react';

const AddBoardButton = () => {
    // const [isModalOpen, toggleModal] = useState(false);

    // function handleModalToggle() {
    //     toggleModal(!isModalOpen);
    // }

    return (
        <>
            <button style={buttonStyles}>+ New Board</button>
            {/* {
                isModalOpen &&
                <Modal closed={handleModalToggle} height="500px" width="600px">
                    <div>Hello Hello Hello</div>
                    <div>Hello Hello Hello</div>
                    <div>Hello Hello Hello</div>
                    <div>Hello Hello Hello</div>
                </Modal>
            } */}
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