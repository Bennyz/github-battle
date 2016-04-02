import React from 'react'
import { transparentBg } from '../styles'
import Prompt from '../components/Prompt'

const PromptContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function() {
    return {
      username: ''
    }
  },

  handleUpdateUser: function(e) {
      this.setState({
        username: e.target.value
      });
  },

  handleSubmitUser: function(e) {
    e.preventDefault();
    var username = this.state.username;
    this.setState({
      username: ''
    });

    if (this.props.routeParams.playerOne) {
      console.log(this.context);
      this.context.router.push({
        pathname: '/battle',
        query: {
          playerOne: this.props.routeParams.playerOne,
          playerTwo: this.state.username
        }
      });
    } else {
      console.log(this.context);
      this.context.router.push('/playerTwo/' + this.state.username);
    }
  },

  handleInitiateBattle: function() {
    this.context.rouer.push({
      pathname: '/results',
      state: {
        playersInfo: this.state.playersInfo
      }
    });
  },

  render: function() {
    return (
      <Prompt
        onSubmitUser={this.handleSubmitUser}
        onUpdateUser={this.handleUpdateUser}
        header={this.props.route.header}
        username={this.state.username}/>
    );
  }

});

export default PromptContainer
