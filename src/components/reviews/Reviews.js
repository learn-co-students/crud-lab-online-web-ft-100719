import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const { reviews, restaurantId, deleteReview } = this.props;
    return (
      <ul>
        {reviews.map(review =>
          review.restaurantId === restaurantId ? (
            <Review
              key={review.id}
              review={review}
              deleteReview={deleteReview}
            />
          ) : (
            ''
          )
        )}
      </ul>
    );
  }
}

export default Reviews;
