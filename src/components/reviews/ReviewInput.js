import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {

  state = {
    text: ''
  }

  handleOnChange(event) {
    this.setState({
      text: event.target.value
    });
  }

  handleOnSubmit(event){
    event.preventDefault();
    this.props.addReview({text: this.state.text, restaurantId: this.props.restaurantId });
    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={(event)=> this.handleOnSubmit(event)}>
          <label>Review:</label>
          <input type="text" onChange={(event)=> this.handleOnChange(event)} value={this.state.text} />
          <input type="submit"/ >
        </form>
      </div>
    );
  }
};

export default ReviewInput;

// ReviewInput Component
//    ✓ displays the ReviewInput component as a child of each Restaurant Component
//    1) has two text input fields, one for review input, and another for submitting
//    2) has an initial state with text key set to empty string
//    3) changes the state with an onChange event
//    4) adds a review to the store when the form is submitted
//    5) updates the state of the store after submitting the form
//    6) sets a property of restaurantId on the review input component from the parent components id
//    7) associates the review with the restaurant with a foreign key on the review
