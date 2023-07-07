import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import {getUserProfile} from '../../redux/profile-reducer';
import { withAuthRedirect } from '../hooks/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
  
  componentDidMount() {
    let userId = this.props.router.params.userId;
    if (!userId) {
      userId = 2;
    }
    this.props.getUserProfile(userId);
  }

  render() {
    return <div>
      <Profile {...this.props} profile={this.props.profile} userId={this.userId}/>
    </div>
  }
};


let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  isAuth: state.auth.isAuth

})

export default compose(
  connect(mapStateToProps, {getUserProfile}),
  withAuthRedirect
)(ProfileContainer);