import React from 'react';

const fixedPosition = {
    position: 'fixed',
    paddingTop: "28em",
    zIndex: 9999,
};

const textRotation = {
    transform: "rotate(270deg)",
    transformOrigin: "-50% 75%",
};

const sideText = {
    ...fixedPosition,
    ...textRotation,
    color: "#5c20bd",
    letterSpacing: "0.2em"
};

export default class Navbar extends React.Component {
    render() {
        return (
            <h3 style={sideText}>
                PSYPHER
            </h3>
        );
    }
}
