import React, { useState } from 'react';
import Modal from '../../../../../Utilities/Modal/Modal';
import { FaEdit } from 'react-icons/fa';

const Ticket = (props) => {
    const [isModalOpen, toggleModal] = useState(false);
    const [editStatus, toggleEditStatus] = useState({ isEditTitleActive: false, isEditDescriptionActive: false });

    function handleModalToggle() {
        toggleModal(!isModalOpen);
    }

    function handleEditTitle() {
        toggleEditStatus(prevStatus => (
            {
                ...prevStatus,
                isEditTitleActive: !prevStatus.isEditTitleActive
            }
        ))
    }

    function handleEditDescription() {
        toggleEditStatus(prevStatus => (
            {
                ...prevStatus,
                isEditDescriptionActive: !prevStatus.isEditDescriptionActive
            }
        ))
    }

    return (
        <>
            <div onClick={handleModalToggle} style={ticketStyles}>
                <span>{props.title}</span>
            </div>
            {
                isModalOpen &&
                <Modal closed={handleModalToggle} height="500px" width="600px">
                    <h1>Ticket Details</h1>
                    <div style={ticketHeadingsStyles}>
                        <h4 style={headingInside}>Title</h4>
                        <span onClick={handleEditTitle} style={editIcon}><FaEdit /></span>
                    </div>
                    {
                        !editStatus.isEditTitleActive ?
                            <p style={{ margin: 0 }}>{props.title}</p> :
                            <input type="text" value={props.title} />
                    }
                    <div style={ticketHeadingsStyles}>
                        <h4 style={headingInside}>Description</h4>
                        <span onClick={handleEditDescription} style={editIcon}><FaEdit /></span>
                    </div>
                    {
                        !editStatus.isEditDescriptionActive ?
                            <p style={{ margin: 0 }}>{props.description}</p> :
                            <input type="text" value={props.description} />
                    }
                </Modal>
            }
        </>
    )
};

const ticketStyles = {
    backgroundColor: 'white',
    margin: '10px 0',
    padding: '7px 0',
    width: '100%',
    cursor: 'pointer',
}

const ticketHeadingsStyles = {
    display: 'flex',
    alignItems: 'center'
}

const headingInside = {
    display: 'inline',
    marginRight: '10px'
}

const editIcon = {
    cursor: 'pointer'
}

export default Ticket;