import React from 'react';
import _ from 'lodash';
import moment from 'moment-strftime';

import styled from 'styled-components';
import { htmlToReact, getPages, Link, safePrefix } from '../utils';

const TitleContainer = styled.div`
  padding-left: 12%;
  padding-bottom: 5vh;
`;
const Title = styled.h1`
  font-size: 5vw;
`;

const TitleIndex = {
  color: "purple",
};

const Text = styled.p`
  padding-left: 30%;
  font-size: 1.5vw;
  font-weight: normal;
  color: black;
`;

export default class SectionPosts extends React.Component {
    render() {
        let display_posts = _.orderBy(getPages(this.props.pageContext.pages, '/posts'), 'frontmatter.date', 'desc');
        let recent_posts = display_posts.slice(0, 3);
        return (
            <section id={_.get(this.props, 'section.section_id')} className={'block posts-block bg-' + _.get(this.props, 'section.bg') + ' outer'}>
              <TitleContainer>
                {_.get(this.props, 'section.title') &&
                  <Title isBlackBackground={_.get(this.props, 'section.background-color') === 'black'}>
                    <span style={TitleIndex}>{_.get(this.props, 'section.title-index')}</span>
                    {_.get(this.props, 'section.title')}
                  </Title>
                }
              </TitleContainer>  

              <div className="inner">
                <div className="post-feed">
                  {_.map(recent_posts, (post, post_idx) => (
                  <article key={post_idx} className="post post-card">
                    <div className="post-card-inside">
                      {_.get(post, 'frontmatter.thumb_img_path') && 
                      <Link className="post-card-thumbnail" to={safePrefix(_.get(post, 'url'))}>
                        <img className="thumbnail" src={safePrefix(_.get(post, 'frontmatter.thumb_img_path'))} alt={_.get(post, 'frontmatter.title')} />
                      </Link>
                      }
                      <div className="post-card-content">
                        <header className="post-header">
                          <h3 className="post-title"><Link to={safePrefix(_.get(post, 'url'))} rel="bookmark">{_.get(post, 'frontmatter.title')}</Link></h3>
                        </header>
                        <div className="post-excerpt">
                          <p>{_.get(post, 'frontmatter.excerpt')}</p>
                        </div>
                        <footer className="post-meta">
                          <time className="published"
                            dateTime={moment(_.get(post, 'frontmatter.date')).strftime('%Y-%m-%d %H:%M')}>{moment(_.get(post, 'frontmatter.date')).strftime('%B %d, %Y')}</time>
                        </footer>
                      </div>
                    </div>
                  </article>
                  ))}
                </div>
              </div>
            </section>
        );
    }
}
