import React, { Component } from 'react';

class ReviewInput extends Component {
  state = {
    text: '',
    restaurantId: this.props.restaurantId
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.addReview(this.state)
    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label name="text">Leave A Review:</label>
          <input 
          type="text" 
          name="text" 
          value={this.state.text}
          onChange={this.handleChange}
          />
          <input type="submit" value="Submit Review" /> 
        </form>
      </div>
    );
  }
};

export default ReviewInput;
