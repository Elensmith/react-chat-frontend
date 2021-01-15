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
              error={props.isError.nameError}
              value={props.value.name}
              placeholder="Name"
              onChange={props.onChange}
              label="Name"
              name="name"
              pattern="[A-Za-z]{2,20}"
              fluid
              // required
              />
          </Form.Field>
          <Form.Field width="16">
            <Form.Input
              error={props.isError.emailError}
              value={props.value.email}
              placeholder="Email"
              type="email"
              name="email"
              onChange={props.onChange}
              label="Email"
              fluid
              // required 
              />
          </Form.Field>
          <Form.Field width="16">
            <Form.Input
              error={props.isError.passwordError}
              placeholder="Password"
              type="password"
              name="password"
              onChange={props.onChange}
              label="Password"
              fluid
              // required 
              />
          </Form.Field>
          <Form.Field width="16">
            <Form.Input
              error={props.isError.avatarError}
              value={props.value.avatar}
              placeholder="Avatar"
              name="avatar"
              onChange={props.onChange}
              label="Avatar"
              fluid
              // required 
              />
          </Form.Field>
          <Button
            content="Create account"
            attached="bottom"
            type="submit"
            color="teal"
            onClick={(e) => {props.onSubmit(e);}} 
            // disabled={props.isDisabled}
            />
        </Form>
      </Segment>
    </Modal >
  );
}


export default Signup;
