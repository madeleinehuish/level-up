import React from 'react';
import { Icon, Table } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const renderChallenges = props => props.challenges.challenges.filter(challenges => challenges.active === 'Active').map(item => (
  <Table.Row key={item.id}>
    <Table.Cell>{item.name}</Table.Cell>
    <Table.Cell>{item.category.category}</Table.Cell>
    <Table.Cell>{item.description}</Table.Cell>
    <Table.Cell textAlign="center" onClick={() => this.props.selectChallenge(item)}>
      <Link to={`/admin/challenge-edit/${item.id}`}>
        <Icon color="orange" name="pencil" />
      </Link>
    </Table.Cell>
    <Table.Cell textAlign="center"><Icon
      id="hover-icon"
      name="trash"
      onClick={() => this.props.makeChallengeInactive(item).then(() => {
        this.props.resetChallengeList();
        this.props.campusChallenges(this.props.adminInfo.campus_id);
      })}
    /></Table.Cell>
    <Table.Cell textAlign="center">{item.point_value}</Table.Cell>
  </Table.Row>
));

export default renderChallenges;