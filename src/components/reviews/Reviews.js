import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const restaurantReviews = this.props.reviews.filter(review=> review.restaurantId === this.props.restaurantId )
    // console.log(this.props.restaurantId)
    // console.log(restaurantReviews)
    // console.log(this.props.reviews)
    return (
      <ul>
        {restaurantReviews.map((review) => 
            <Review review={review} deleteReview={this.props.deleteReview} />
          )}
      </ul>
    );
  }
};

export default Reviews;