import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  render() {
    const toRender = this.props.reviews.filter(review => review.restaurantId === this.props.restaurantId)

    return (
      <ul>
        {toRender.map(review => <Review key={review.id} review={review} deleteReview={this.props.deleteReview} />)}
      </ul>
    );
  }
};

export default Reviews;