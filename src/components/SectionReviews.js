import React from 'react';
import _ from 'lodash';
import Review from './Reviews';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 5vw;
  color: ${props => props.isBlackBackground ?
    "white" : "black"};
  padding-left: 12.5%;
  padding-bottom: 7vh;
  padding-top: 10vh;
`;

const TitleIndex = {
  color: "purple",
};

export default class SectionReviews extends React.Component {
  render() {
    return (
      <section id={_.get(this.props, 'section.section_id')} className={'block reviews-block bg-' + _.get(this.props, 'section.bg') + " outer"}>
        {_.get(this.props, 'section.title') &&
          <Title isBlackBackground={_.get(this.props, 'section.background-color') === 'black'}>
            <span style={TitleIndex}>{_.get(this.props, 'section.title-index')}</span>
            {_.get(this.props, 'section.title')}
          </Title>
        }

        {_.get(this.props, 'section.reviews') &&
          <div className="inner">
            <div className="grid" >
              {_.map(_.get(this.props, 'section.reviews'), (review, review_idx) => (
                <Review
                  key={`Review ${review_idx}`}
                  {...this.props}
                  review={review}
                  review_idx={review_idx}
                />
              ))}
            </div>
          </div>
        }
      </section>
    );
  }
}
