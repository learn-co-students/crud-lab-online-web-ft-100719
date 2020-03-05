import React, { Component } from 'react';

class ReviewInput extends Component {
  constructor() {
    super();
    this.state = { text: '' };
  }

  handleOnChange = event => {
    this.setState({ text: event.target.value });
  };

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.addReview({
      restaurantId: this.props.restaurantId,
      ...this.state
    });
    this.setState({ text: '' });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <input
            type='text'
            name='text'
            id='text'
            onChange={this.handleOnChange}
            value={this.state.text}
          />
          <input type='submit' />
        </form>
      </div>
    );
  }
}

export default ReviewInput;
