import React from 'react'
import { Card, Image, Header, Container } from 'semantic-ui-react'

function UserCard(props) {
  return (
    <Card>
      <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
      <Card.Content>
        <Header size='medium' textAlign='left'>Matt</Header>
        <Container textAlign='left'>
          krnekfjnwflkwnflkn
          </Container>
      </Card.Content>
    </Card>
  )
}

export default UserCard;