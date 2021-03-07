import React from 'react';

const Header = () => (
    <header style={headerStyles}>
        <h2 style={headingText}>Project Manager</h2>
    </header >
);

const headerStyles = {
    width: '100%',
    height: '50px',
    backgroundColor: 'slategray',
    color: 'white',
    lineHeight: '50px'
}

const headingText = {
    marginTop: 0
}

export default Header;