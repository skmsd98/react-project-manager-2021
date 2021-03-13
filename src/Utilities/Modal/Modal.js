import React from 'react';
import Backdrop from './../../Utilities/Backdrop/Backdrop';

const Modal = (props) => (
    <>
        <Backdrop closed={props.closed} />
        <div style={{
            height: props.height,
            width: props.width,
            zIndex: 101,
            backgroundColor: 'white',
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            margin: 'auto',
            borderRadius: '5px',
            overflow: 'scroll',
            textAlign: 'left',
            padding: '15px 30px',
            boxSizing: 'border-box'
        }}>
            {props.children}
        </div>
    </>
)

export default Modal;