import React from 'react';
import _ from 'lodash';

import { htmlToReact, safePrefix } from '../utils';

export default class Review extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showImage: true,
        };
        this.handleHover = this.handleHover.bind(this);
    }

    handleHover() {
        this.setState(state => ({
            showImage: false,
        }));
    }

    render() {
        const image = <img className="cell review" src={safePrefix(_.get(this.props.review, 'avatar'))} alt="Author avatar" />;
        const backgroundText = <div className="review-inside">
            <p className="review-text">{htmlToReact(_.get(this.props.review, 'content'))}</p>
            <footer className="review-footer">
                {_.get(this.props.review, 'avatar') &&
                    <img className="review-avatar" src={safePrefix(_.get(this.props.review, 'avatar'))} alt="Author avatar" />
                }
                <div>
                    <div>
                        <cite className="review-author">{_.get(this.props.review, 'author')}</cite>
                    </div>
                    <div>
                        <cite className="review-author-profession">{_.get(this.props.review, 'author_profession')}</cite>
                    </div>
                </div>
                <div>
                </div>
            </footer>
        </div>

        return (
            <div className="cell review" onMouseOver={this.handleHover}>
                    {this.state.showImage ?
                        image : backgroundText
                    }
            </div>
        );
    }
};