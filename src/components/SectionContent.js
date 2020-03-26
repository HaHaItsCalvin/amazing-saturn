import React from 'react';
import _ from 'lodash';
import styled from 'styled-components';

import { safePrefix, markdownify, Link } from '../utils';

const purple = "#5c20bd";

const ReviewText = styled.p`
    font-size: 2.5vh;
    color: ${purple};
`;

const Header = styled.h3`
    color: ${purple};
    padding-top: 5vh;
    font-size: 
`;

const Title = styled.h1`
    color: ${purple};
`;


const fixedPosition = {
  position: 'fixed',
  "padding-top": "28em",
  "z-index": 9999,
};

const textRotation = {
  transform: "rotate(270deg)",
  "transform-origin": "-50% 75%",
};

const sideText = {
  ...fixedPosition,
  ...textRotation,
  color: "white",
  letterSpacing: "0.2em"
};

export default class SectionContent extends React.Component {
    render() {
        return (
            <section id={_.get(this.props, 'section.section_id')} className={'block text-block bg-' + _.get(this.props, 'section.bg') + ' outer'}>
                <div className="grid">
                  {_.get(this.props, 'section.image') && 
                  <div className="cell block-preview">
                    <img src={safePrefix(_.get(this.props, 'section.image2'))} alt={_.get(this.props, 'section.title')} />
                  </div>
                }
                {_.get(this.props, 'section.image') &&
                  <div className="cell block-preview">
                    <img src={safePrefix(_.get(this.props, 'section.image'))} alt={_.get(this.props, 'section.title')} />
                  </div>
                }
                  {/* <div className="cell block-content">
                      {_.get(this.props, 'section.header') &&
                        <Header>{_.get(this.props, 'section.header')}</Header>
                      }
                      {_.get(this.props, 'section.title') && 
                      <Title>{markdownify(_.get(this.props, 'section.title'))}</Title>
                      }
                      <ReviewText>
                          {markdownify(_.get(this.props, 'section.content'))}
                      </ReviewText>
                      {_.get(this.props, 'section.actions') && 
                      <p className="block-buttons">
                        {_.map(_.get(this.props, 'section.actions'), (action, action_idx) => (
                        <Link key={action_idx} to={safePrefix(_.get(action, 'url'))} className="button secondary">{_.get(action, 'label')}</Link>
                        ))}
                      </p>
                      }
                  </div> */}
                </div>
            </section>
        );
    }
}
