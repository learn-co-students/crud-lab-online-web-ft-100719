import React, { Component } from 'react';
// import Reviews from './Reviews';

class ReviewInput extends Component {

  state = {
    text: '',
    id: '',
    restaurantId: this.props.restaurantId
  }

  handleOnChange(event) {
    const {name, value} = event.target
    this.setState({
      [name] : value,
    });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.addReview(this.state);
    this.setState({
      text: '',
      id: '',
      restaurantId: this.props.restaurantId
    });
  }
  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
        <label>
            Enter Review:
          <input
            type="text"
            name="text"
            value={this.state.text}
            onChange={(event) => this.handleOnChange(event)} />
          </label>
          <input type="submit" value="Add Review" />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
