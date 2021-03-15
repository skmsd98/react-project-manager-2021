import React, { useState } from 'react';
import Modal from '../../../../../utilities/Modal/Modal';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from "react-icons/md";
import classes from './Ticket.module.css';

const Ticket = (props) => {
    const [isModalOpen, toggleModal] = useState(false);
    const [editStatus, toggleEditStatus] = useState(false);
    const [inputValues, setInputValues] = useState({ title: props.title, description: props.description });

    function handleModalToggle() {
        toggleModal(!isModalOpen);
        toggleEditStatus(false);
    }

    function hanldeUpdateTicket() {
        const { ticketId, boardId, title, description } = props;
        const newObj = { id: ticketId, title, description, title: inputValues.title, description: inputValues.description };
        props.updateTicket(ticketId, boardId, newObj);
        handleModalToggle();
    }

    function handleToggleStatus() {
        toggleEditStatus(!editStatus);
    }

    function handleDeleteTicket() {
        handleModalToggle();
        props.deleteTicket(props.ticketId, props.boardId);
    }

    function handleLeaveEdit(buttonPressed) {
        if (buttonPressed == 'save') {
            hanldeUpdateTicket();
        } else {
            setInputValues({ title: props.title, description: props.description });
        }
        toggleEditStatus(!editStatus);
    }

    function handleInputChange(e, inputName) {
        setInputValues({ ...inputValues, [inputName]: e.target.value })
    }

    const ticketModal = (
        <>
            <div className={classes.ticketModalHeadingStyles}>
                <h2>Ticket Details</h2>
                <div className={classes.editDeleteButtons}>
                    {
                        !editStatus && (
                            <span onClick={handleToggleStatus}>
                                <FaEdit />
                            </span>
                        )
                    }
                    <span onClick={handleDeleteTicket}><MdDelete /></span>
                </div>
            </div>

            <h4>Title</h4>
            {
                !editStatus ?
                    <p className={classes.noMargin}>{inputValues.title}</p> :
                    <input
                        type="text"
                        value={inputValues.title}
                        onChange={e => handleInputChange(e, 'title')}
                    />
            }

            <h4>Description</h4>
            {
                !editStatus ?
                    <p className={classes.noMargin}>{inputValues.description}</p> :
                    <input
                        type="text"
                        value={inputValues.description}
                        onChange={e => handleInputChange(e, 'description')}
                    />
            }
            {
                editStatus && (
                    <div className={classes.saveCancelButtons}>
                        <button onClick={() => handleLeaveEdit('save')}>Save</button>
                        <button onClick={() => handleLeaveEdit('cancel')}>Cancel</button>
                    </div>
                )
            }
        </>
    )

    return (
        <>
            <div onClick={handleModalToggle} className={classes.ticketStyles}>
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

export default Ticket;