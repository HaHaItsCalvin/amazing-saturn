import React from 'react';
import _ from 'lodash';
import styled from "styled-components";

import { markdownify } from '../utils';

const PrimaryContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  overflow: invisible;
  background-position: top;
  background-repeat: no-repeat;
  background-size: 80% 85%;
  background-image: url(${props => props.image});
  height: 85vh;
  padding-bottom: 15vh;
`;

const MessageContainer = styled.div`
    color: white;
    width: 35vw;
    height: 40vh;
    padding-top: 60vh;
    padding-right: 17.5vw;
`;
const Message = styled.div`
    background: black;
    font-size: 3vw;
    font-weight: bolder;
    line-height: 1.3;
    padding-bottom: 1vh;
`;

const formatMessage = {
    "padding-left": "7.5vh",
    "padding-top": "5.5vh",
};
const ButtonText = styled.h2`
    padding-bottom: 3vh;
    color: inherit;
    font-size: 1.5vw;
    font-weight: bold;
`;
const Grid = styled.div`
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  display: -ms-flexbox;
  padding-left: 7.5vh;
  display: -webkit-flex;
  display: flex;
  padding-bttom: 1vh;
`;

const imageSpacing = {
    "padding-bottom": "5vh",
    "padding-left": "1vw",
};

const link = {
    color: "transparent",
}
export default class SectionContactUs extends React.Component {
    render() {
        return (
            <section id={_.get(this.props, 'section.section_id')} className={'block text-block bg-' + _.get(this.props, 'section.bg') + ' outer'}>
                <PrimaryContainer
                    image={_.get(this.props, 'section.image') || ""}
                >
                    <div className = "grid">
                        <MessageContainer>
                            <Message>
                                <div style = {formatMessage}>
                                    {markdownify(_.get(this.props, 'section.content'))}
                                </div>
                                <Grid>
                                    <ButtonText>{_.get(this.props, 'section.button_text') || ""}</ButtonText>
                                    <a href="/contact/" style={link}>
                                        <img style={imageSpacing} alt= "Contact Us"height="20px" width="50px" src="https://cdn3.iconfinder.com/data/icons/line/36/arrow_right-512.png" />
                                    </a>
                                </Grid>
                            </Message>
                        </MessageContainer>
                    </div>
                </PrimaryContainer>
            </section>
        );
    }
}
