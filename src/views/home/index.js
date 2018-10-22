import React, { Component } from 'react';
import { connect } from 'react-redux';
import Actions from './actions';
import './style.css';

function mapStateToProps(state) {
  return {
    text: state.home.text
  };
}

class Home extends Component {
  componentDidMount() {
    this.props.dispatch(Actions.start('Hello World!'));
  }

  render() {
    return (
      <div className="Home">
        <h1>Home page</h1>
        <p>{this.props.text}</p>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Home);
