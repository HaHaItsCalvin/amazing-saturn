import React from 'react';
import _ from 'lodash';

import styled from 'styled-components';
import { htmlToReact, markdownify } from '../utils';

const Section = styled.div`
  height:90vh;
  padding-top: 10vh;
  padding-left:30%;
`;

export default class SectionContact extends React.Component {
    render() {
        let section = _.get(this.props, 'section');
      return (
        <Section>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScUJ_XfORD13lFaY4bYo_ad-Ahyofy6ktda-n0voNacdQhELg/viewform?embedded=true" width="640" height="822" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        </Section>
        
        //     <section id={_.get(section, 'section_id')} className={'block contact-block bg-' + _.get(section, 'bg') + ' outer'}>
        //       <div className="block-header inner-small">
        //         {_.get(section, 'title') && 
        //         <h2 className="block-title">{_.get(section, 'title')}</h2>
        //         }
        //         {_.get(section, 'subtitle') && 
        //         <p className="block-subtitle">
        //           {htmlToReact(_.get(section, 'subtitle'))}
        //         </p>
        //         }
        //       </div>
        //       <div className="block-content inner-medium">
        //         {markdownify(_.get(section, 'content'))}
        //         <form name="contactForm" method="POST" netlifyHoneypot="bot-field" data-netlify="true" id="contact-form"
        //           className="contact-form">
        //           <p className="screen-reader-text">
        //             <label>Don't fill this out if you're human: <input name="bot-field" /></label>
        //           </p>
        //           <p className="form-row">
        //             <label className="form-label">Name</label>
        //             <input type="text" name="name" className="form-input"/>
        //           </p>
        //           <p className="form-row">
        //             <label className="form-label">Email address</label>
        //             <input type="email" name="email" className="form-input"/>
        //           </p>
        //           <p className="form-row">
        //             <label className="form-label">Message</label>
        //             <textarea name="message" className="form-textarea" rows="7" />
        //           </p>
        //           <input type="hidden" name="form-name" value="contactForm" />
        //           <p className="form-row form-submit">
        //             <button type="submit" className="button">Send Message</button>
        //           </p>
        //         </form>
        //       </div>
        //     </section>
        );
    }
}
