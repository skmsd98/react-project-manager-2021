import classes from './Modal.module.css';
import React from 'react';
import Backdrop from './../../utilities/Backdrop/Backdrop';

const Modal = (props) => (
    <>
        <Backdrop closed={props.closed} />
        <div className={classes.modalStyles} style={{
            height: props.height,
            width: props.width
        }}>
            {props.children}
        </div>
    </>
)

export default Modal;