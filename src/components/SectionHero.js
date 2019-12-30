import React from 'react';
import _ from 'lodash';
import psypherSizzle from '../../public/videos/psypherSizzle.mp4';

import { safePrefix, markdownify, Link } from '../utils';

const buttonStyle = {
  color: 'white',
};

export default class SectionHero extends React.Component {
  render() {
    return (
      <section id={_.get(this.props, 'section.section_id')} className="block hero-block bg-black outer">
        <div className="inner">
          <div className="grid">
            {/* <Video className="block hero-block sizzle-video"/> */}
            <video className="block hero-block sizzle-video">
              <source src={psypherSizzle} type='video/mp4' />
            </video>
            <img src={_.get(this.props, 'section.image')} className="block hero-block sizzle-video" />
            
            <div><img src={_.get(this.props, 'section.image')} className="block hero-block hero-content-spacer" /></div>
            <div className="block hero-block hero-content">
              {_.get(this.props, 'section.title1') && <h2 className="block-title-white"> {_.get(this.props, 'section.title1')} </h2>}
              {_.get(this.props, 'section.title2') && <h2 className="block-title-white"> {_.get(this.props, 'section.title2')} </h2>}

              <div className="block-subttitle-white">
                {markdownify(_.get(this.props, 'section.content'))}
              </div>

              {_.get(this.props, 'section.actions') &&
                <p className="block-buttons">
                  {_.map(_.get(this.props, 'section.actions'), (action, action_idx) => (
                    <Link key={action_idx} to={safePrefix(_.get(action, 'url'))} style={buttonStyle}>{_.get(action, 'label')}</Link>
                  ))}
                </p>
              }
            </div>
            
          </div>
          
        </div>
      </section>
    );
  }
}
