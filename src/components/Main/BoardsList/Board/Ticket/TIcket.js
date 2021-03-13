import React, { useState } from 'react';
import Modal from '../../../../../Utilities/Modal/Modal';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from "react-icons/md";

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

    function edit() {
        const { ticketId, boardId, title, description } = props;
        const newObj = { id: ticketId, title, description, title: 'tootle', description: 'descropidpfsi' }
        props.updateTicket(ticketId, boardId, newObj)
    }

    function add() {
        const newObj = { title: 'tootle', description: 'descropidpfsi' }
        props.addTicket(props.boardId, newObj)
    }

    function handleDeleteTicket() {
        handleModalToggle();
        props.deleteTicket(props.ticketId, props.boardId);
    }

    const ticketModal = (
        <>
            <div style={ticketModalHeadingStyles}>
                <h2>Ticket Details</h2>
                <div style={{
                    fontSize: '20px'
                }}>
                    <span style={{
                        cursor: 'pointer'
                    }}><FaEdit /></span>
                    <span onClick={handleDeleteTicket} style={{
                        marginLeft: '20px',
                        color: '#d03030',
                        cursor: 'pointer'
                    }}><MdDelete /></span>
                </div>
            </div>
            <h4>Title</h4>
            {
                !editStatus.isEditTitleActive ?
                    <p style={{ margin: 0 }}>{props.title}</p> :
                    <input type="text" value={props.title} />
            }
            <h4>Description</h4>
            {
                !editStatus.isEditDescriptionActive ?
                    <p style={{ margin: 0 }}>{props.description}</p> :
                    <input type="text" value={props.description} />
            }
            <div style={{
                marginTop: '30px'
            }}>
                <button style={{
                    padding: '10px 20px',
                    color: 'white',
                    border: '1px solid dimgray',
                    backgroundColor: '#0e9e0e',
                    marginRight: '10px'
                }}>Save</button>
                <button style={{
                    padding: '10px 20px',
                    color: 'white',
                    border: '1px solid dimgray',
                    backgroundColor: '#d03e08'
                }}>Cancel</button>
            </div>
        </>
    )

    return (
        <>
            <div onClick={handleModalToggle} style={ticketStyles}>
                <span>{props.title}</span>
            </div>
            {
                isModalOpen &&
                <Modal closed={handleModalToggle} height="400px" width="500px">
                    {ticketModal}
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

const ticketModalHeadingStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
}

// const ticketHeadingsStyles = {
//     display: 'flex',
//     alignItems: 'center'
// }

// const headingInside = {
//     display: 'inline',
//     marginRight: '10px'
// }

// const editIcon = {
//     cursor: 'pointer'
// }

export default Ticket;