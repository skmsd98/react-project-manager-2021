import React from 'react';

const Backdrop = (props) => <div style={{
    position: 'fixed',
    left: 0,
    top: 0,
    height: '100vh',
    width: '100vw',
    backgroundColor: 'black',
    opacity: 0.7,
    zIndex: 100
}} onClick={props.closed}></div>;

export default Backdrop;