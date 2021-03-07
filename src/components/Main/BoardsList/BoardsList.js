import React, { Component } from 'react';
import Board from './Board/Board'

class BoardsList extends Component {

    state = {
        boardsList: [{
            title: 'my board',
            tickets: [
                { title: 'my ticket', description: 'this is my ticket' }
            ]
        },
        {
            title: 'nice board',
            tickets: [
                { title: 'ticket 1', description: 'this is ticket 1' },
                { title: 'ticket 2', description: 'this is ticket 2' },
                { title: 'ticket 3', description: 'this is ticket 3' },
                { title: 'ticket 4', description: 'this is ticket 4' },
                { title: 'ticket 5', description: 'this is ticket 5' }
            ]
        }, {
            title: 'other board',
            tickets: [
                { title: 'my ticket', description: 'this is my ticket' },
                { title: 'my ticket', description: 'this is my ticket' },
                { title: 'my ticket', description: 'this is my ticket' }
            ]
        }]
    }

    render() {
        return (
            <div style={boardsListStyles}>
                {
                    this.state.boardsList.map(board => {
                        return <Board title={board.title} tickets={board.tickets} />
                    })
                }
            </div>
        )
    }
}

const boardsListStyles = {
    display: 'flex',
    overflowX: 'scroll',
    overflowY: 'hidden',
    height: '500px',
    alignItems: 'flex-start'
}

export default BoardsList;