import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    debugger
    const reviewsList =  this.props.reviews.map(review => <Review 
      key={review.id} 
      review={review} 
      deleteReview={this.props.deleteReview}/>)
    return (
      <ul>
        {reviewsList.length > 0 ? reviewsList : "No reviews yet"}
      </ul>
    );
  }
};

export default Reviews;