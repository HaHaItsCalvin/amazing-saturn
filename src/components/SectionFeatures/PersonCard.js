import React from "react";
import styled from "styled-components";

const GridCard = styled.div`
    -webkit-flex: 5;
    -ms-flex: 5;
    flex: 5;
`;

const Name = styled.h2`
  color: ${props => props.isBlackBackground ?
        "white" : "black"};
`;

const Role = styled.h4`
  color: ${props => props.isBlackBackground ?
        "white" : "black"};
`;

const Quote = styled.p`
  font-size: 1.1vw;
  font-weight: normal;
  color: ${props => props.isBlackBackground ?
        "white" : "black"};
`;

export default class PersonCard extends React.Component {
    render() {
        return (
            <Person
                isBlackBackground ={this.props.isBlackBackground}
                image = {this.props.image}
                name = {this.props.name}
                role = {this.props.role}
                quote = {this.props.quote}
            />
        );
    };
};

class Person extends React.Component {
    render() {
        return (
            <GridCard>
                {this.props.image && <img src={this.props.image} width="65%" alt={this.props.name}/>}

                <Name isBlackBackground = {this.props.isBlackBackground}>
                    {this.props.name}
                </Name>

                <Role isBlackBackground = {this.props.isBlackBackground}>
                    {this.props.role}
                </Role>

                <Quote isBlackBackground = {this.props.isBlackBackground}>
                    {this.props.quote}
                </Quote>
            </GridCard>
        );
    }
}