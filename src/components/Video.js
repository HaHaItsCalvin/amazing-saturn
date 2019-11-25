'use strict';

import React, { Component } from 'react';

class Video extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videoURL: 'https://www.youtube.com/watch?v=Ro7L0Ck78hA&t=1s'
        }
    }

    render() {
        return (
            <video id="background-video" loop autoPlay>
                <source src={this.state.videoURL} type="video/mp4" />
                <source src={this.state.videoURL} type="video/ogg" />
                Your browser does not support the video tag.
            </video>
        )
    }
};

export default Video;