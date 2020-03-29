import React from 'react';
import _ from 'lodash';
import styled from 'styled-components';

import { Link, safePrefix, markdownify} from '../utils';

const ContentText = styled.p`
  font-size: 2.2vh;
`;

export default class SectionCta extends React.Component {
    render() {
        return (
            <section id={_.get(this.props, 'section.section_id')} className="block cta-block bg-accent outer">
              <div className="inner-large">
                <div className="grid">
                  <div className="cell block-content">
                    {_.get(this.props, 'section.title') && 
                    <h4 className="block-title">{markdownify(_.get(this.props, 'section.title'))}</h4>
                    }
                    {_.get(this.props, 'section.subtitle') && 
                    <ContentText >
                      {markdownify(_.get(this.props, 'section.subtitle'))}
                    </ContentText>
                    }
                </div>
                  {_.get(this.props, 'section.actions') && 
                  <div className="cell block-buttons">
                    {_.map(_.get(this.props, 'section.actions'), (action, action_idx) => (
                    <Link key={action_idx} to={safePrefix(_.get(action, 'url'))} className="button blue large">{_.get(action, 'label')}</Link>
                    ))}
                  </div>
                  }
                </div>
              </div>
            </section>
        );
    }
}
