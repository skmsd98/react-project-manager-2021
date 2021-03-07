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
            top: "8%",
            left: '27%',
            borderRadius: '5px'
        }}>
            {props.children}
        </div>
    </>
)

export default Modal;