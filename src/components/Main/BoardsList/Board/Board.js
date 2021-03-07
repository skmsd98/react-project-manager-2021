import React from 'react';
import Ticket from './Ticket/TIcket';

const Board = (props) => (
    <div style={boardStyles}>
        <div style={boardTitleStyles}>
            <h5 style={{ margin: 0 }}>{props.title}</h5>
        </div>
        <div style={{
            maxHeight: '420px',
            overflowY: 'scroll'
        }}>
            {
                props.tickets.map(ticket => <Ticket title={ticket.title} description={ticket.description} />)
            }
        </div>
    </div>
);

const boardStyles = {
    backgroundColor: 'lightgray',
    border: '1px solid',
    margin: '10px',
    padding: '5px',
    minWidth: '250px',
}

const boardTitleStyles = {
    padding: '15px',
    backgroundColor: 'slategray',
    color: 'white',
}

export default Board;