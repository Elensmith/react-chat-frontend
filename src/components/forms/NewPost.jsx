import React from "react";
import { Button, Form, Segment, Modal, Input, TextArea, Header } from "semantic-ui-react";

function NewPost(props) {

  return (
    <Modal
      size={"tiny"}
      open={props.open}
      closeIcon={true}
      onClose={props.onClose}
    >
      <Segment basic={true} padded>
        <Header size="medium" textAlign="center">Add post</Header>
        <Form>
          <Form.Field width="16" label="Title" placeholder="Title" control={Input}>
          </Form.Field>
          <Form.Field width="16"
            control={TextArea}
            placeholder="Text"
            label="Text">

          </Form.Field>
          <Button content="Create post" color="teal" type="submit" attached="bottom" ></Button>
        </Form>
      </Segment>
    </Modal >
  );
}


export default NewPost;