import React from 'react';
import _ from 'lodash';
import styled from "styled-components";

import { safePrefix, markdownify, Link } from '../utils';

const PrimaryContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  overflow: invisible;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-image: url(${props => props.image});
  height: 40vh;
  padding-bottom: 15vh;
`;

export default class SectionBannerImage extends React.Component {
    render() {
        return (
            <section id={_.get(this.props, 'section.section_id')}>
                <PrimaryContainer
                    image={_.get(this.props, 'section.image') || ""}
                >
                </PrimaryContainer>
            </section>
        );
    }
}
