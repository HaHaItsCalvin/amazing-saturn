import React from 'react';
import {Helmet} from 'react-helmet';
import _ from 'lodash';

import {safePrefix} from '../utils';
import Navbar from './Navbar';
import Footer from './Footer';
import SocialMediaBar from './SocialMediaBar';
import LeftPsypherText from './LeftPsypherText';

const navbarBackground = {
    background: 'black',
};

export default class Body extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <title>{_.get(this.props, 'pageContext.site.siteMetadata.title') + ' - '}{_.get(this.props, 'pageContext.frontmatter.title') && _.get(this.props, 'pageContext.frontmatter.title')}</title>
                    <meta charSet="utf-8"/>
                    <meta name="viewport" content="width=device-width, initialScale=1.0" />
                    <meta name="google" content="notranslate" />
                    <link href="https://fonts.googleapis.com/css?family=Nunito+Sans:400,400i,700,700i" rel="stylesheet"/>
                    <link rel="stylesheet" href={safePrefix('assets/css/main.css')} />
                    <link rel="shortcut icon" href="../../images/psyico.ico"></link>
                </Helmet>
                <div id="page" className={'site palette-' + _.get(this.props, 'pageContext.site.siteMetadata.palette')}>
                    <div style={navbarBackground}>
                        <Navbar {...this.props} />
                    </div>
                    <SocialMediaBar {...this.props} />
                    <LeftPsypherText {...this.props} />
                  <main id="content" className="site-content">
                    {this.props.children}
                  </main>
                  <Footer {...this.props} />
                </div>
            </React.Fragment>
        );
    }
}
