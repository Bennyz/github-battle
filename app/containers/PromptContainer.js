import React from 'react'
import { transparentBg } from '../styles'
import Prompt from '../components/Prompt'

const PromptContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState() {
    return {
      username: ''
    }
  },

  handleUpdateUser(e) {
      this.setState({
        username: e.target.value
      });
  },

  handleSubmitUser(e) {
    e.preventDefault();
    const { username } = this.state;
    this.setState({
      username: ''
    });
    
    const { playerOne } = this.props.routeParams;
    if (playerOne) {
      console.log(this.context);
      this.context.router.push({
        pathname: '/battle',
        query: {
          playerOne,
          playerTwo: username
        }
      });
    } else {
      console.log(this.context);
      this.context.router.push(`/playerTwo/${username}`);
    }
  },

  handleInitiateBattle() {
    this.context.rouer.push({
      pathname: '/results',
      state: {
        playersInfo: this.state.playersInfo
      }
    });
  },

  render() {
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
