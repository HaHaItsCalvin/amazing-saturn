import React from 'react';
import _ from 'lodash';
import styled from 'styled-components';

import { htmlToReact, safePrefix, markdownify } from '../utils';
import CtaButtons from './CtaButtons';

const OurStory = styled.div`
  margin-top: 15vh;
  margin-left: 10vh;
  margin-bottom: 15vh;
  font-weight: 15px;
`;

const Title = styled.h1`
  font-size: 5vw;
`;
const titleIndex = {
  color: "purple",
};
const Text = styled.p`
  padding-left: 30%;
  font-size: 1.5vw;
  font-weight: normal;
  color: black;
`;

export default class SectionFeatures extends React.Component {
  render() {
    const specialPhrases = [
      'two-part workshops',
      "youth-centered discussions about wellness",
      "expressive outlet through urban dance."
    ];

    return (
      <section id={_.get(this.props, 'section.section_id')} className={'block features-block bg-' + _.get(this.props, 'section.bg') + ' outer'}>
        <OurStory className = "inner">

          {_.get(this.props, 'section.title') &&
            <Title>
              <span style= {titleIndex}> {_.get(this.props, 'section.title-index')} </span>
              {_.get(this.props, 'section.title')}
            </Title>
          }

          {_.get(this.props, 'section.subtitle') &&
            <Text>
              {htmlToReact(_.get(this.props, 'section.subtitle'))}
          </Text>
          }
        </OurStory>
        
        {_.get(this.props, 'section.featureslist') &&
          <div className="inner">
          {_.map(_.get(this.props, 'section.featureslist'), (feature, feature_idx) => (
              <div key={feature_idx} >
                <div className="grid">
                  <div className="cell block-content">
                    <Title>
                      <span style={titleIndex}>{_.get(feature, 'title-index')}</span>
                      {_.get(feature, 'title')}
                    </Title>
                  {_.get(feature, 'content2') ?
                    <Text> {markdownify(_.get(feature, 'content'))} </Text> : <Text> {markdownify(_.get(feature, 'content'))} </Text>
                  }
                    {/* {_.get(feature, 'actions') &&
                      <CtaButtons {...this.props} actions={_.get(feature, 'actions')} />
                    } */}
                    
                  </div>
                </div>
              </div>
            ))}
          </div>
        }
      </section>
    );
  }
}
