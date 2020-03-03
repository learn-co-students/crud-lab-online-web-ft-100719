import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteReview } from '../../actions/reviews'

class Review extends Component {

  render() {
    const { review } = this.props

    return (
      <div>
        
          {review.text}
        
        <button onClick={() => this.props.deleteReview(review.id)}> X </button>
      </div>
    );
  }

};

export default connect(null, { deleteReview })(Review)
