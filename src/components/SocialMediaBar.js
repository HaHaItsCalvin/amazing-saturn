import React from 'react';
import _ from 'lodash';

import { Link } from '../utils';

const fixedPosition = {
    position: 'fixed',
    "padding-top": "40vh",
    right: "1em",
    "z-index": 9999,
};

const socialSidebar = {
    ...fixedPosition,
    background: "transparent",
    "list-style-type": "none",
};

export default class Navbar extends React.Component {
    render() {
        return (
            <ul style={socialSidebar}>
                {_.map(_.get(this.props, 'pageContext.site.data.social.links'), (link, link_idx) => (
                    <li key={link_idx}>
                        <Link to={_.get(link, 'url')} target="_blank" rel="noopener">
                            {/* <img
                                //TODO: Add Image assets after Dylan Cuts them up.
                                // src={_.get(link, 'image')}
                                alt={_.get(link, 'title')}
                            /> */}
                            {_.get(link, 'title')}
                        </Link>
                    </li>
                ))}
            </ul>
        );
    }
}
