import React from "react";
import { Button, Form, Segment, Modal, Header } from "semantic-ui-react";

function Signup(props) {

  return (
    <Modal
      style={{ maxWidth: 350 }}
      size={"tiny"}
      open={props.open}
      closeIcon={true}
      onClose={props.onClose}
    >
      <Segment basic={true} padded>
        <Form >
          <Header
            size="medium"
            textAlign="center">
            Sign up
            </Header>
          <Form.Field width="16">  
            <Form.Input
              placeholder="Name"
              onChange={props.onChange}
              label="Name"
              name="name"
              />
          </Form.Field>  
          <Form.Field width="16">
            <Form.Input
              placeholder="Email"
              type="email"
              name="email"
              onChange={props.onChange}
              label="Email" />
          </Form.Field>
          <Form.Field width="16">
            <Form.Input
              placeholder="Password"
              type="password"
              name="password"
              onChange={props.onChange}
              label="Password" />
          </Form.Field>
          <Form.Field width="16">
            <Form.Input
              placeholder="Avatar"
              name="avatar"
              onChange={props.onChange}
              label="Avatar" />
          </Form.Field>
          <Button
            content="Create account"
            attached="bottom"
            type="submit"
            color="teal"
            onClick={() => props.onSubmit} />
        </Form>
      </Segment>
    </Modal >
  );
}


export default Signup;