import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    let filteredReviews = this.props.reviews.filter(rev => rev.restaurantId === this.props.restaurant.id)
    let renderReviews = filteredReviews.map(rev => <li key={rev.id} ><Review key={rev.id} review={rev} /></li>)
    return (
      <div>
        <ul>
          {renderReviews}
        </ul>
      </div>
    );
  }
};

export default Reviews;