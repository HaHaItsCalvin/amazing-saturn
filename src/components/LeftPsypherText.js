import React from 'react';
import _ from 'lodash';

import { Link } from '../utils';

const fixedPosition = {
    position: 'fixed',
    "padding-top": "28em",
    "z-index": 9999,
};

const textRotation = {
    transform: "rotate(270deg)",
    "transform-origin": "-50% 75%",
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
