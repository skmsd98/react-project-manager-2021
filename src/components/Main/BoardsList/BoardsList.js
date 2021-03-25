import React, { Component } from 'react';
import Board from './Board/Board'
import { v4 as uuidv4 } from 'uuid';
import NewBoard from './NewBoard/NewBoard';
import classes from './BoardsList.module.css';

class BoardsList extends Component {
    state = {
        boardsList: []
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

    handleDeleteBoard = boardId => {
        const boardIndex = this.state.boardsList.findIndex(board => board.id == boardId);
        const currentState = Object.assign({}, this.state);
        currentState.boardsList.splice(boardIndex, 1);

        this.updateState(currentState);
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
            <div className={classes.boardsListStyles}>
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
                            deleteBoard={this.handleDeleteBoard}
                        />
                    )
                }
                <NewBoard addBoard={this.handleAddBoard} />
            </div>
        )
    }
}

export default BoardsList;