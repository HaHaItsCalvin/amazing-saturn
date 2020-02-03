import React from 'react';
import _ from 'lodash';
import styled from 'styled-components';

import { htmlToReact, safePrefix } from '../utils';

const IsHoveredReview = styled.div`
    padding: 7vh;
    background: white;
    max-height: 50vh;
`;

const ReviewText = styled.p`
    font-size: 17px;
    font-weight: bold;
`;

const reviewAvatar = {
    "border-radius": "50%",
    "margin-right": "15px",
    height: "10vw",
    width: "10vw",
};

const AuthorName = styled.cite`
    color: _palette(secondary);
    font-size: 3vh;
    font-weight: bold;
    margin: 0;
`;

const AuthorProfession = styled.cite`
    color: _palette(secondary);
    font-size: 2vh;
    margin: 0;
`;
export default class Review extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showImage: true,
        };
        this.onMouseOver = this.onMouseOver.bind(this);
        this.onMouseOut = this.onMouseOut.bind(this);
    }

    onMouseOver() {
        this.setState(state => ({
            showImage: false,
        }));
    }

    onMouseOut() {
        this.setState(state => ({
            showImage: true,
        }));
    }

    render() {
        const image = <img style={{height:"50vh", width: "50vw"}} src={safePrefix(_.get(this.props.review, 'avatar'))} alt="Author avatar" />;
        const backgroundText = <IsHoveredReview>
            <ReviewText>{htmlToReact(_.get(this.props.review, 'content'))}</ReviewText>
            <footer className="review-footer">
                {_.get(this.props.review, 'avatar') &&
                    <img style={reviewAvatar} src={safePrefix(_.get(this.props.review, 'avatar'))} alt="Author avatar" />
                }
                <div>
                    <div>
                        <AuthorName>{_.get(this.props.review, 'author')}</AuthorName>
                    </div>
                    <div>
                        <AuthorProfession>{_.get(this.props.review, 'author_profession')}</AuthorProfession>
                    </div>
                </div>
                <div>
                </div>
            </footer>
        </IsHoveredReview>

        return (
            <div className="cell review" onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut} style = {{
                "padding-top": "5vh",
                "padding-bottom": "10vh",
            }}>
                    {this.state.showImage ?
                        image : backgroundText
                    }
            </div>
        );
    }
};