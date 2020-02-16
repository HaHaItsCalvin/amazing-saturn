import React from 'react';
import _ from 'lodash';
import styled from 'styled-components';

const Section = styled.div`
  background: ${props => props.isBlackBackground ?
    "black" : "white"};
  color: ${props => props.isBlackBackground ?
    "white" : "black"};
  padding-left: 15%;
  padding-right: 15%;
  padding-top: 20vh;
  padding-bottom: 10vh;
`;

const Title = styled.h1`
  font-size: 5vw;
  color: inherit;
`;

const Subtitle = styled.h2`
  font-size: 1.8vw;
  color: inherit;
  padding-left: 50vw;
`;

export default class SectionGallery extends React.Component {
    render(){
        return(
            <section id={_.get(this.props, 'section.section_id')}>
                <Section isBlackBackground={_.get(this.props, 'section.background-color') === 'black'}>
                    <Title isBlackBackground={_.get(this.props, 'section.background-color') === 'black'}>
                        {_.get(this.props, 'section.title')}
                    </Title>
                    <Subtitle>
                        {_.get(this.props, 'section.subtitle')}
                    </Subtitle>
                </Section>
            </section>
        );
    }
};