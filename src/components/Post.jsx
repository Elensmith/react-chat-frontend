import React from 'react'
import { Card, Icon, Grid } from 'semantic-ui-react';

const Post = () => {

  return (

    <Card color='violet'>
      <Card.Content textAlign='left'>
        <Card.Header content='Post Title' />
        <Card.Description content='Today was a good day.' />
        <Grid divided='vertically'>
          <Grid.Row columns={2}>
            <Grid.Column>
              <Card.Meta>
                <span className='date'>Jake Smith</span>
              </Card.Meta>
              <Card.Meta>
                <span className='date'>02.02.2021</span>
              </Card.Meta>
            </Grid.Column>
            <Grid.Column>
              <Card.Content textAlign='right'>
                <span>
                  <Icon name='like' />
            22
            </span>
              </Card.Content>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Card.Content>
    </Card>
  )
}


export default Post;