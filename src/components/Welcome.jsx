import React from "react";
import { Card, Header, } from "semantic-ui-react";

function Welcome() {
  return (
    <Card >
      <Card.Content>
        <Header size="huge" textAlign="center">Welcome to Chat</Header>
        <Card.Description textAlign="center">
          Please Sign in to share your best
      </Card.Description>
      </Card.Content>
    </Card>
  );
}

export default Welcome;