import React from 'react';
import _ from 'lodash';
import styled from 'styled-components';
import PersonCard from './SectionFeatures/PersonCard';
import { htmlToReact, markdownify, safePrefix } from '../utils';


const gridStyling = {
    "padding-left": "2vw",
    display: "grid",
    "grid-template-columns": "1fr 1fr ",
    "grid-gap": "5vw",
};
const centeredGrid = {
  ...gridStyling,
  marginLeft: "10%",
  marginBottom: "15vh",
  marginTop: "10vh",
  "grid-gap": "0.5vw",
};

const Title = styled.h1`
  font-size: 5vw;
  color: ${props => props.isBlackBackground ?
    "white" : "black"};
`;

const TitleIndex = {
  color: "purple",
};

const Section = styled.div`
  background: ${props => props.isBlackBackground ?
    "black" : "white"};
  padding-left: 15%;
  padding-right: 15%;
  padding-top: 10vh;
  padding-bottom: 10vh;
`;

export default class SectionMeetTheTeam extends React.Component {
    render() {
      return (
        <section id={_.get(this.props, 'section.section_id')}>
          <Section isBlackBackground={_.get(this.props, 'section.background-color') === 'black'}>
            <Title isBlackBackground={_.get(this.props, 'section.background-color') === 'black'}>
              <span style={TitleIndex}>{_.get(this.props, 'section.title-index')}</span>
              {_.get(this.props, 'section.title')}
            </Title>
            {_.get(this.props, 'section.director') &&
              _.map(_.get(this.props, 'section.director'), (director, director_idx)=>(
                <div style={centeredGrid}>
                  <img src={_.get(director, 'image')} height="20%" width="70%"/>
                  <PersonCard
                    isBlackBackground={_.get(this.props, 'section.background-color') === 'black'}
                    name={_.get(director, 'name')}
                    role={_.get(director, 'role')}
                    quote={_.get(director, 'quote')}
                  />
                </div>
              ))
            }
              <div style={gridStyling}>
                {_.get(this.props, 'section.people') &&
                  _.map(_.get(this.props, 'section.people'), (people, people_idx) => (
                    <PersonCard
                      isBlackBackground={_.get(this.props, 'section.background-color') === 'black'}
                      name={_.get(people, 'name')}
                      role={_.get(people, 'role')}
                      image={_.get(people, 'image')}
                      quote={_.get(people, 'quote')}
                    />
                  ))
                }
              </div>
          </Section>
        </section>
        );
      }
  }
