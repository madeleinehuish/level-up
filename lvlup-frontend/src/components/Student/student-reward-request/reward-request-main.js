import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { bindActionCreators } from 'redux';
import RewardRequestForm from './reward-request-form';
import RequestCompleted from './reward-request-completed';
import BrokeModal from './reward-request-broke';
import renderIf from 'render-if';
import { rewardRequest } from '../../../actions/student-rewards-actions';
import './reward-request-style.css';

const mapStateToProps = state => ({
  requestStatus: state.requestedReward.fulfilled,
  pts: state.studentPointsAndCampus,
  reward: state.selectedReward,
});

const mapDispatchToProps = dispatch => bindActionCreators({ rewardRequest }, dispatch);

const affordable = (reward, pts) => (reward.point_cost <= pts.currentTotal);

class StudentRewardRequest extends Component {
  render() {
    const isAffordable = () => this.props.reward.point_cost <= this.props.pts.currentTotal;
    const ifRequested = renderIf(this.props.requestStatus === true && isAffordable);
    const ifNotRequested = renderIf(this.props.requestStatus === false && isAffordable);

    return (
      <div className="reward-request">
        {renderIf(!isAffordable())(
          <BrokeModal />,
        )}
        {ifNotRequested(
          <RewardRequestForm />,
        )}
        {ifRequested(
          <RequestCompleted />,
        )}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentRewardRequest);
