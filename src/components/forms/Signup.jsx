import React from 'react'
import { Button, Form, Segment, Modal, Header } from 'semantic-ui-react';

const Signup = () => {
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
        Sign up
        </Button>
      <Modal
        style={{ maxWidth: 350 }}
        size={size}
        open={open}
        closeIcon={true}
        onClose={() => dispatch({ type: 'close' })}
      >
        <Segment basic='true' padded>
          <Form>
            <Header size='medium' textAlign='center'>Sign up</Header>
            <Form.Field width='16'>
              <label>Name</label>
              <input placeholder='Name' />
            </Form.Field>
            <Form.Field width='16'>
              <label>Email</label>
              <input placeholder='Email' type='email' />
              {/* <Input label='Email' placeholder='Email' /> */}
            </Form.Field>
            <Form.Field width='16'>
              <label>Password</label>
              <input placeholder='Password' type='password' />
              {/* <Input label='Password' placeholder='Password' /> */}
            </Form.Field>
            <Form.Field width='16'>
              <label>Avatar</label>
              <input placeholder='Avatar' />
              {/* <Input label='Avatar' placeholder='Avatar' /> */}
            </Form.Field>
            <Button content="Create account" attached='bottom' color='teal' type='submit' ></Button>
          </Form>
        </Segment>
      </Modal >
    </>
  )
}


export default Signup;