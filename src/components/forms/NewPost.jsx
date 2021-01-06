import React from 'react'
import { Button, Form, Segment, Modal, Input, TextArea } from 'semantic-ui-react';

const NewPost = () => {
  function exampleReducer(state, action) {
    switch (action.type) {
      case 'close':
        return { open: false }
      case 'open':
        return { open: true, size: action.size }
      default:
        throw new Error('Unsupported action...')
    }
  }

  const [state, dispatch] = React.useReducer(exampleReducer, {
    open: false,
    size: undefined,
  })
  const { open, size } = state

  return (
    <>
      <Button onClick={() => dispatch({ type: 'open', size: 'tiny' })}>
        Add post
        </Button>
      <Modal
        size={size}
        open={open}
        closeIcon={true}
        onClose={() => dispatch({ type: 'close' })}
      >
        <Segment basic='true' padded>
          <Form>
            <Form.Field width='16' label='Title' placeholder='Title' control={Input}>
            </Form.Field>
            <Form.Field width='16'
              control={TextArea}
              placeholder='Text'
              label='Text'>

            </Form.Field>
            <Button content="Create post" color='teal' type='submit' attached='bottom' ></Button>
          </Form>
        </Segment>
      </Modal >
    </>
  )
}


export default NewPost;