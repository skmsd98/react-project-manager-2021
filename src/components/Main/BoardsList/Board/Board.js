import React, { useState } from 'react';
import Ticket from './Ticket/Ticket';
import TextInput from './../../../shared/TextInput/TextInput';
import { FaEdit } from 'react-icons/fa'

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

    return (
        <div style={boardStyles}>
            {
                isEditBoardInputVisible ?
                    <TextInput value={props.title} onsave={handleEditBoard} oncancel={toggleEditBoardInput} /> :
                    <div onClick={toggleEditBoardInput} style={boardTitleStyles}>
                        <h5 style={{ margin: 0 }}>{props.title}</h5>
                        <span style={{ marginLeft: '10px' }}><FaEdit /></span>
                    </div>
            }
            <div style={{
                maxHeight: '360px',
                overflowY: 'scroll'
            }}>
                {
                    props.tickets.map((ticket, index) =>
                        <Ticket
                            title={ticket.title}
                            description={ticket.description}
                            key={index}
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
                    <div style={addTicketButtonStyles} onClick={toggleAddTicketInput}>Add Ticket</div>
            }
        </div >
    )
}

const boardStyles = {
    backgroundColor: 'lightgray',
    border: '1px solid',
    margin: '10px',
    padding: '5px',
    minWidth: '250px'
}

const boardTitleStyles = {
    padding: '15px',
    backgroundColor: 'slategray',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    cursor: 'pointer'
}

const addTicketButtonStyles = {
    backgroundColor: 'gray',
    margin: '10px 0px',
    padding: '7px 0px',
    width: '100%',
    cursor: 'pointer',
    color: 'white'
}

export default Board;