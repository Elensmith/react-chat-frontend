import React from "react";
import { Button, Form, Segment, Modal, Header } from "semantic-ui-react";

function Signin(props) {

  return (
    <Modal
      style={{ maxWidth: 300 }}
      size={"tiny"}
      open={props.open}
      closeIcon={true}
      onClose={props.onClose}
    >
      <Segment basic={true} padded >
        <Form>
          <Header size="medium" textAlign="center">Sign in</Header>

          <Form.Field width="16">
            <label>Email</label>
            <input placeholder="Email" type="email" />
          </Form.Field>
          <Form.Field width="16">
            <label>Password</label>
            <input placeholder="Password" type="password" />
          </Form.Field>
          <Button content="Login" attached="bottom" color="teal" type="submit" ></Button>
        </Form>
      </Segment>

    </Modal >
  );
}


export default Signin;