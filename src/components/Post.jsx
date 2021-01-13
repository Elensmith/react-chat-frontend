import React from "react";
import { Card, Icon, Grid } from "semantic-ui-react";

function Post(props) {

  return (

    <Card style={{ width: 450, backgroundColor: "rgba(255, 165, 0, 0.5)" }} >
      <Card.Content style={{ paddingBottom: 0 }} textAlign="left">
        <Card.Header content={props.post.title} />
        <Card.Content style={{ paddingBottom: 13 }} description={props.post.text} />
        <Grid divided="vertically">
          <Grid.Row columns={2}>
            <Grid.Column>
              <Card.Meta>
                <span className="date"></span>
              </Card.Meta>
              <Card.Meta>
                <span className="date">{props.post.createdAt}</span>
              </Card.Meta>
            </Grid.Column>
            <Grid.Column style={{ alignSelf: "flex-end" }}>
              <Card.Content textAlign="right">
                <span >
                  <Icon name="like" />
            22
            </span>
              </Card.Content>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Card.Content>
    </Card >
  );
}


export default Post;