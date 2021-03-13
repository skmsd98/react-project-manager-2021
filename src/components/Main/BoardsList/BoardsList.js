import React, { Component } from 'react';
import Board from './Board/Board'
import { v4 as uuidv4 } from 'uuid';
// import TextInput from '../../shared/TextInput/TextInput';
import NewBoard from './NewBoard/NewBoard';

class BoardsList extends Component {
    state = {
        boardsList: [{
            id: uuidv4(),
            title: 'my board',
            tickets: [
                { id: uuidv4(), title: 'my ticket', description: 'this is my ticket' }
            ]
        },
        {
            id: uuidv4(),
            title: 'nice board',
            tickets: [
                { id: uuidv4(), title: 'ticket 1', description: 'this is ticket 1' },
                { id: uuidv4(), title: 'ticket 2', description: 'this is ticket 2' },
                { id: uuidv4(), title: 'ticket 3', description: 'this is ticket 3' },
                { id: uuidv4(), title: 'ticket 4', description: 'this is ticket 4' },
                { id: uuidv4(), title: 'ticket 5', description: 'this is ticket 5' }
            ]
        }, {
            id: uuidv4(),
            title: 'other board',
            tickets: [
                { id: uuidv4(), title: 'my ticket', description: 'this is my ticket' },
                { id: uuidv4(), title: 'my ticket', description: 'this is my ticket' },
                { id: uuidv4(), title: 'my ticket', description: 'this is my ticket' }
            ]
        }]
    }

    handleAddBoard = title => {
        if (title.trim()) {
            const currentState = Object.assign({}, this.state);
            const data = { id: uuidv4(), title, tickets: [] };
            currentState.boardsList.push(data);

            this.updateState(currentState);
        }
    }

    handleUpdateBoard = (boardId, data) => {
        if (data.title.trim()) {
            const currentState = Object.assign({}, this.state);
            const boardIndex = currentState.boardsList.findIndex(board => board.id === boardId);
            currentState.boardsList[boardIndex] = { ...currentState.boardsList[boardIndex], ...data };

            this.updateState(currentState);
        }
    }

    handleUpdateTicket = (ticketId, boardId, data) => {
        if (data.title.trim()) {
            const boardIndex = this.state.boardsList.findIndex(board => board.id == boardId);
            const ticketIndex = this.state.boardsList[boardIndex].tickets.findIndex(ticket => ticket.id == ticketId);
            const currentState = Object.assign({}, this.state);
            currentState.boardsList[boardIndex].tickets[ticketIndex] = data;

            this.updateState(currentState);
        }
    }

    handleDeleteTicket = (ticketId, boardId) => {
        const boardIndex = this.state.boardsList.findIndex(board => board.id == boardId);
        const ticketIndex = this.state.boardsList[boardIndex].tickets.findIndex(ticket => ticket.id == ticketId);
        const currentState = Object.assign({}, this.state);
        currentState.boardsList[boardIndex].tickets.splice(ticketIndex, 1);

        this.updateState(currentState);
    }

    handleAddTicket = (boardId, data) => {
        if (data.title.trim()) {
            const boardIndex = this.state.boardsList.findIndex(board => board.id == boardId);
            const currentState = Object.assign({}, this.state);
            data.id = uuidv4();
            currentState.boardsList[boardIndex].tickets.push(data);

            this.updateState(currentState);
        }
    }

    updateState = newState => {
        this.setState(prevState => (
            {
                ...prevState,
                ...newState
            }
        ))
    }

    render() {
        return (
            <div style={boardsListStyles}>
                {
                    this.state.boardsList.map((board, index) =>
                        <Board
                            title={board.title}
                            tickets={board.tickets}
                            key={index}
                            boardId={board.id}
                            addTicket={this.handleAddTicket}
                            updateTicket={this.handleUpdateTicket}
                            deleteTicket={this.handleDeleteTicket}
                            updateBoard={this.handleUpdateBoard}
                        />
                    )
                }
                <NewBoard addBoard={this.handleAddBoard} />
            </div>
        )
    }
}

const boardsListStyles = {
    display: 'flex',
    overflowX: 'scroll',
    overflowY: 'hidden',
    height: 'calc(100vh - 50px)',
    alignItems: 'flex-start'
}

export default BoardsList;