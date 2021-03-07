import React from 'react';
import BoardsList from './BoardsList/BoardsList';
import NewBoardToolbar from './NewBoardToolbar/NewBoardToolbar';

const Main = () => (
    <main>
        <NewBoardToolbar />
        <BoardsList />
    </main>
);

export default Main;