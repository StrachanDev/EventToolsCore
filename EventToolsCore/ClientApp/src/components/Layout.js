import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavigationMenu } from './NavigationMenu';

export class Layout extends Component {
  displayName = Layout.name

  render() {
    return (
      <div>
        <NavigationMenu />
        <Container>
          {this.props.children}
        </Container>
      </div>
    );
  }
}
