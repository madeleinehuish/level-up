import React from 'react';
import { Label, Table, Button, Container, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const AddRewardCompleted = props => (
  <Container className="lvl-table">
    <Table celled selectable color="orange">
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell textAlign="center" className="completed-thead">Reward Successfully Added!</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>
            <Label ribbon>Reward</Label>
            {props.addedReward.data.name}
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Label ribbon>Point Cost</Label>
            {props.addedReward.data.point_cost}
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Label ribbon>Description</Label>
            {props.addedReward.data.description}
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
    <Grid centered>
      <Link to={'/admin/rewards'}>
        <Button basic color="orange" id="completed-btn">Back to Rewards</Button>
      </Link>
    </Grid>
  </Container>
);


export default AddRewardCompleted;
