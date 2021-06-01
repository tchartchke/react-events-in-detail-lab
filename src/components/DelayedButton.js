// Code DelayedButton Component Here
import React, { Component } from 'react';

export default class DelayedButton extends Component {

  // Create a button that, when clicked, will pass the 
  // click event to the onDelayedClick prop within a setTimeout().
  // The setTimeout() should be set to this.props.delay.

  handleClick = (e) => {
    e.persist()
    setTimeout(() => {
      this.props.onDelayedClick(e)
    }, this.props.delay);
  }

  render () {
    return <button onClick={this.handleClick}>Delay</button>
  }

}