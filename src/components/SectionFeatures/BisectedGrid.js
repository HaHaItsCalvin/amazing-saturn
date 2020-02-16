import React from "react";
import styled from "styled-components";

const gridStyling = {
    "padding-left": "2vw",
    "padding-top": "3vh",
    display: "grid",
    "grid-template-columns": "1fr 1fr ",
    "grid-gap": "7.5vw",
};

const Subtitle = styled.h2`
  color:purple;
  padding-bottom: 7.5vh;
`;

const GridCard = styled.div`
    -webkit-flex: 5;
    -ms-flex: 5;
    flex: 5;
`;

const LargeSubtitle = styled.h1`
  font-size: 3vw;
  color: ${props => props.isBlackBackground ?
        "white" : "black"};
`;

const Content = styled.p`
  font-size: 1.5vw;
  font-weight: normal;
  color: ${props => props.isBlackBackground ?
        "white" : "black"};
  padding-top: 3vh;
`;

export default class BisectedGrid extends React.Component {
    render() {
        return (
            <div style={gridStyling}>
                <BisectedGridCard
                    subtitle={this.props.subtitle1}
                    largeSubtitle={this.props.useLargeSubtitle1}
                    image={this.props.image1}
                    imageAlt={this.props.imageAlt1}
                    content={this.props.content1}
                    video={this.props.video1}
                    isBlackBackground={this.props.isBlackBackground}
                />
                <BisectedGridCard
                    subtitle={this.props.subtitle2}
                    largeSubtitle={this.props.useLargeSubtitle2}
                    image={this.props.image2}
                    imageAlt={this.props.imageAlt2}
                    content={this.props.content2}
                    video={this.props.video2}
                    isBlackBackground={this.props.isBlackBackground}
                />
            </div>

        );
    };
};

class BisectedGridCard extends React.Component {
    render() {
        const safePrefix = "/";
        return (
            <GridCard>
                {this.props.video !== safePrefix ?
                    <iframe width="100%" height="100%" title="Matthew's Story" src={this.props.video} frameborder="0" allow="accelerometer; encrypted-media; picture-in-picture" allowfullscreen=""></iframe>
                        :
                    <div>
                        {
                            this.props.largeSubtitle ? 
                            <LargeSubtitle isBlackBackground={this.props.isBlackBackground}> {this.props.subtitle} </LargeSubtitle>
                            : <Subtitle isBlackBackground={this.props.isBlackBackground}> {this.props.subtitle} </Subtitle>
                        }
                        {
                            this.props.image !== safePrefix && <img src={this.props.image} alt={this.props.imageAlt} />
                        }
                        <Content isBlackBackground={this.props.isBlackBackground}>
                            {this.props.content}
                        </Content>
                    </div>
                }
            </GridCard>
        );
    }
}