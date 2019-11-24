import React from 'react';
import _ from 'lodash';
import Review from './Reviews';

import { htmlToReact } from '../utils';

export default class SectionReviews extends React.Component {
  render() {
    return (
      <section id={_.get(this.props, 'section.section_id')} className={'block reviews-block bg-' + _.get(this.props, 'section.bg') + ' outer'}>
        <div className="block-header inner-small">
          {_.get(this.props, 'section.title') &&
            <h2 className="block-title">{_.get(this.props, 'section.title')}</h2>
          }

          {_.get(this.props, 'section.subtitle') &&
            <p className="block-subtitle">
              {htmlToReact(_.get(this.props, 'section.subtitle'))}
            </p>
          }
        </div>


        {_.get(this.props, 'section.reviews') &&
          <div className="inner">
            <div className="grid">
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
