import React from 'react';

const Ticket = (props) => (
    <div style={ticketStyles}>
        <span>{props.title}</span>
    </div>
);

const ticketStyles = {
    backgroundColor: 'white',
    margin: '10px 0',
    padding: '7px 0',
    width: '100%',
    cursor: 'pointer',
}

export default Ticket;