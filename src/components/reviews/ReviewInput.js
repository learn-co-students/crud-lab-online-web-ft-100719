import React, { Component } from 'react';

class ReviewInput extends Component {
  state = {
    text: ''
  }

  handleOnSubmit = e => {
    e.preventDefault()
    this.props.addReview(this.state.text, this.props.restaurantId)
    this.setState({
      text: ''
    })
  }

  handleOnChange = e => {
    this.setState({
      text: e.target.value
    })
  }

  render() {
    return (
      <div>
        Review Input
        <form onSubmit={this.handleOnSubmit}>
          <label>Review: </label>
          <input type='text' value={this.state.text} onChange={this.handleOnChange} />
          <input type='submit' value='Submit Review' />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
