import React from 'react';
import _ from 'lodash';

import { Link } from '../utils';

const fixedPosition = {
    position: 'fixed',
    paddingTop: "40vh",
    right: "1em",
    zIndex: 9999,
};

const socialSidebar = {
    ...fixedPosition,
    background: "transparent",
    listStyleType: "none",
};

const styles = {
    link: {
        color: "transparent",
    },
};

const linkSpacing = {
    paddingBottom: "2vh",
}

const links = [
    {
        "type": "facebook",
        "image": "/images/Social/facebook_purple.png",
        "title": "Facebook",
        "url": "https://www.facebook.com/psypherLAofficial/"
    },
    {
        "type": "instagram",
        "image": "/images/Social/insta_purple.png",
        "title": "Instagram",
        "url": "https://www.instagram.com/psypherla/"
    },
    {
        "type": "youtube",
        "image": "/images/Social/youtube_purple.png",
        "title": "Youtube",
        "url": "https://www.youtube.com/channel/UC1OPKweUr8nS75zKuO_FMeA"
    }
];

export default class Navbar extends React.Component {
    render() {
        return (
            <ul style={socialSidebar}>
                {_.map((links || []), (link, link_idx) => (
                    <li key={link_idx} style={linkSpacing}>
                        <Link to={link.url} target="_blank" rel="noopener" style={styles.link}>
                            <img
                                width="30vw"
                                src={link.image}
                            />
                        </Link>
                    </li>
                ))}
            </ul>

        );
    }
}
