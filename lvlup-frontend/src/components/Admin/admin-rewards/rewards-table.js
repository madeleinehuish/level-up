import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Icon, Table, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { campusRewards, selectReward } from '../../../actions/student-rewards-actions';
import './admin-rewards-style.css';

const mapStateToProps = state => ({
  lvlUpInfo: state.studentPointsAndCampus,
  rewards: state.rewards.rewards,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  campusRewards, selectReward,
}, dispatch);

class RewardsTable extends Component {
  constructor(props) {
    super(props);
    this.renderRewards = this.renderRewards.bind(this);
  }

  componentWillMount() {
    this.props.campusRewards(this.props.lvlUpInfo.campusId);
  }

  renderRewards(list) {
    return list.map(item => (
      <Table.Row key={item.id}>
        <Table.Cell>{item.name}</Table.Cell>
        <Table.Cell>{item.category.category}</Table.Cell>
        <Table.Cell>{item.description}</Table.Cell>
        <Table.Cell>
          <Link to={`/admin/reward-edit/${item.id}`}>
            <Icon onClick={() => this.props.selectReward(item)} name="pencil" /></Link>
        </Table.Cell>
        <Table.Cell><Icon name="trash" /></Table.Cell>
        <Table.Cell>{item.point_cost}</Table.Cell>
      </Table.Row>
    ));
  }

  render() {
    if (this.props.rewards.length === 0) {
      return (<div>LOADING</div>);
    }
    return (
      <Container>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Title</Table.HeaderCell>
              <Table.HeaderCell>Category</Table.HeaderCell>
              <Table.HeaderCell>Description</Table.HeaderCell>
              <Table.HeaderCell>Edit</Table.HeaderCell>
              <Table.HeaderCell>Remove</Table.HeaderCell>
              <Table.HeaderCell>Points</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {this.renderRewards(this.props.rewards)}
          </Table.Body>

        </Table>
      </Container>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RewardsTable);
