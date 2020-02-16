import React from 'react';
import _ from 'lodash';
import Video from './Video';
import styled from 'styled-components';

import { safePrefix, markdownify, Link } from '../utils';

const Section = styled.div`
  height:90vh;
  padding-top: 10vh;
  background: black;
`;
const HeroText = styled.div`
  padding-top: 20vh;
  padding-left: 15%;
  position: absolute;
`;

const VideoContainer = styled.div`
  padding-top: 10vh;
  margin-left: auto;
  margin-right: 5%;
  height: 70vh;
  width: 100%;
  max-width:60vw;
`;

export default class SectionHero extends React.Component {
  render() {
    return (
      <section id={_.get(this.props, 'section.section_id')}>
        <Section>
          <HeroText>
            {_.get(this.props, 'section.title1') && <h2 className="block-title-white"> {_.get(this.props, 'section.title1')} </h2>}
            {_.get(this.props, 'section.title2') && <h2 className="block-title-white"> {_.get(this.props, 'section.title2')} </h2>}

            <div className="block-subttitle-white">
              {markdownify(_.get(this.props, 'section.content'))}
            </div>

            {_.get(this.props, 'section.actions') &&
              <p className="block-buttons">
                {_.map(_.get(this.props, 'section.actions'), (action, action_idx) => (
                  <Link key={action_idx} to={safePrefix(_.get(action, 'url'))} className="button white large">{_.get(action, 'label')}</Link>
                ))}
              </p>
            }
          </HeroText>

          <VideoContainer>
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/d5v7Lnssy9w" frameborder="0" allow="accelerometer; autoplay;picture-in-picture" allowfullscreen></iframe>
          </VideoContainer>
        </Section>
      </section>
    );
  }
}
