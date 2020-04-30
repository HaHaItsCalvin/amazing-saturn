import React from 'react';
import _ from 'lodash';
import styled from 'styled-components';
import BisectedGrid from './SectionFeatures/BisectedGrid';
import OurStory from './SectionFeatures/OurStory';

import { htmlToReact, markdownify, safePrefix } from '../utils';

const Title = styled.h1`
  font-size: 5vw;
`;

const TitleIndex = {
  color: "purple",
};

const Text = styled.p`
  padding-left: 30%;
  padding-top: 5vh;
  font-size: 1.5vw;
  font-weight: normal;
  color: black;
`;

const Grid = styled.div`
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  margin: 0 -0.83333rem;
  padding-top: 15vh;
  padding-bottom: 10vh;
  max-height: 100%
`;

const Section = styled.div`
  background: ${props => props.isBlackBackground ?
    "black" : "white"};
  padding-left: 15%;
  padding-right: 15%;
  padding-top: 10vh;
  padding-bottom: 17.5vh;
`;
/**
 * This styling is a workaround for enabling the background Color of each div
 * in the Section Features to go across the entire web page.
 * */
const configureBackgroundOverflow = {
  paddingLeft: 0,
  paddingRight: 0,
  minWidth: "100%",
  paddingBottom: "0",
  paddingTop: 0,
};
export default class SectionFeatures extends React.Component {
  render() {
    return (
      <body id={_.get(this.props, 'section.section_id')} className={'block features-block bg-' + _.get(this.props, 'section.bg') + ' outer'} style={configureBackgroundOverflow}>
        <OurStory
          title={_.get(this.props, 'section.title')}
          titleIndex={_.get(this.props, 'section.title-index')}
          content={htmlToReact(_.get(this.props, 'section.content'))}
        />
        
        {_.get(this.props, 'section.featureslist') &&
          _.map(_.get(this.props, 'section.featureslist'), (feature, feature_idx) => (
            <Section key={feature_idx} isBlackBackground={_.get(feature, 'background-color') === 'black'}>
                <div>
                  <Grid>
                    <div className="cell block-content">
                      <Title isBlackBackground={_.get(feature, 'background-color') === 'black'}>
                        <span style={TitleIndex}>{_.get(feature, 'title-index')}</span>
                        {_.get(feature, 'title')}
                      </Title>
                      
                    {_.get(feature, 'use-bisected-grid') ?
                      <BisectedGrid
                        isBlackBackground={_.get(feature, 'background-color') === 'black'}
                        subtitle1={_.get(feature, 'subtitle1')}
                        subtitle2={_.get(feature, 'subtitle2')}
                        useLargeSubtitle1={_.get(feature, 'use-large-subtitle-1')}
                        useLargeSubtitle2={_.get(feature, 'use-large-subtitle-2')}
                        content1={markdownify(_.get(feature, 'content1'))}
                        content2={markdownify(_.get(feature, 'content2'))}
                        image1={safePrefix(_.get(feature, 'image1'))}
                        image2={safePrefix(_.get(feature, 'image2'))}
                        imageAlt1={safePrefix(_.get(feature, 'imageAlt1'))}
                        imageAlt2={safePrefix(_.get(feature, 'imageAlt2'))}
                        video1={safePrefix(_.get(feature, 'video1'))}
                        video2={safePrefix(_.get(feature, 'video2'))}
                      /> : <Text> {markdownify(_.get(feature, 'content'))} </Text>
                    }
                    </div>
                  </Grid>
                </div>
              </Section>
            ))
        }
      </body>
    );
  }
}
