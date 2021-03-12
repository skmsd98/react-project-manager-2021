import React, { useState } from 'react';
import Ticket from './Ticket/Ticket';
import TextInput from './../../../shared/TextInput/TextInput';

const Board = (props) => {
    const [isInputVisible, toggleInputVisibility] = useState(false);

    const handleSaveTicket = title => {
        toggleInput();
        props.addTicket(props.boardId,
            {
                title,
                description: ""
            }
        )
    }

    const toggleInput = () => {
        toggleInputVisibility(!isInputVisible);
    }

    return (
        <div style={boardStyles}>
            <div style={boardTitleStyles}>
                <h5 style={{ margin: 0 }}>{props.title}</h5>
            </div>
            <div style={{
                maxHeight: '420px',
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
                {
                    isInputVisible ?
                        <TextInput onsave={handleSaveTicket} oncancel={toggleInput} /> :
                        <div style={addTicketButtonStyles} onClick={toggleInput}>Add Ticket</div>
                }
            </div>
        </div>
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
    color: 'white'
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