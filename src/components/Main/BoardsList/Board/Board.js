import React, { useState } from 'react';
import Ticket from './Ticket/Ticket';
import TextInput from './../../../shared/TextInput/TextInput';
import { FaEdit } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'
import classes from './Board.module.css';
import { v4 as uuidv4 } from 'uuid';

const Board = (props) => {
    const [isAddTicketInputVisible, toggleAddTicketInputVisibility] = useState(false);
    const [isEditBoardInputVisible, toggleEditBoardInputVisibility] = useState(false);

    const handleSaveTicket = title => {
        toggleAddTicketInput();
        props.addTicket(props.boardId,
            {
                title,
                description: ""
            }
        )
    }

    const handleEditBoard = title => {
        toggleEditBoardInput();
        props.updateBoard(props.boardId, { title });
    }


    const toggleAddTicketInput = () => {
        toggleAddTicketInputVisibility(!isAddTicketInputVisible);
    }

    const toggleEditBoardInput = () => {
        toggleEditBoardInputVisibility(!isEditBoardInputVisible);
    }

    const handleDeleteBoard = () => {
        props.deleteBoard(props.boardId);
    }

    return (
        <div className={classes.boardStyles}>
            {
                isEditBoardInputVisible ?
                    <TextInput value={props.title} onsave={handleEditBoard} oncancel={toggleEditBoardInput} /> :
                    <div className={classes.boardTitleStyles}>
                        <h5 style={{ margin: 0 }}>{props.title}</h5>
                        <div>
                            <span onClick={toggleEditBoardInput}><FaEdit /></span>
                            <span onClick={handleDeleteBoard}><MdDelete /></span>
                        </div>
                    </div>
            }
            <div className={classes.ticketsContainer}>
                {
                    props.tickets.map((ticket) =>
                        <Ticket
                            title={ticket.title}
                            description={ticket.description}
                            key={uuidv4()}
                            boardId={props.boardId}
                            ticketId={ticket.id}
                            addTicket={props.addTicket}
                            updateTicket={props.updateTicket}
                            deleteTicket={props.deleteTicket}
                        />
                    )
                }
            </div>
            {
                isAddTicketInputVisible ?
                    <TextInput onsave={handleSaveTicket} oncancel={toggleAddTicketInput} /> :
                    <div className={classes.addTicketButtonStyles} onClick={toggleAddTicketInput}>Add Ticket</div>
            }
        </div >
    )
}

export default Board;