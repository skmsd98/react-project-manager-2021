import classes from './Backdrop.module.css';
import React from 'react';

const Backdrop = props => (
    <div
        className={classes.backdropStyles}
        onClick={props.closed}>
    </div>
);

export default Backdrop;