import React from 'react';
import styled from 'styled-components';

const Story = styled.div`
  padding-top: 25vh;
  background:white;
  font-weight: 15px;
  margin-left: auto;
  margin-right: auto;
  max-width: 1140px;
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

export default class OurStory extends React.Component{
    render() {
        return (
            <Story>
                <Title>
                    <span style={TitleIndex}>{this.props.titleIndex}</span>
                    {this.props.title}
                </Title>
                <Text>
                    {this.props.content}
                </Text>
            </Story>
        );
    };
};