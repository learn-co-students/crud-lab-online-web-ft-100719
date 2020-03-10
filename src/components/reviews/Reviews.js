import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    return (
      <ul>
        Reviews:
        { this.props.reviews.filter( r => r.restaurantId === this.props.restaurantId).map( r => {
          return <Review review={r} key={r.id} deleteReview={this.props.deleteReview} />
        })}
      </ul>
    );
  }
};

export default Reviews;