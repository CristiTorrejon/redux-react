import React, { Component } from 'react';
import Search from '../components/search';
import { connect } from 'react-redux';
// import { searchVideo } from '../../actions/index';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/index';

class SearchContainer extends Component {
  state = {
    value: '',
    prompt: false
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.actions.searchVideo(this.input.value);
  }

  setInputRef = element => {
    this.input = element;
  }

  handleInputChange = event => {
    this.setState({
      value: event.target.value,
      prompt: !!(event.target.value.length)
    })
  }

  render() {
    return (
      <Search
        setRef={this.setInputRef}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleInputChange}
        value={this.state.value}
        prompt={this.state.prompt}
      />
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(null, mapDispatchToProps) (SearchContainer);