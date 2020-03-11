import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import { connect } from 'react-redux'

class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput restaurantId={this.props.restaurantId} addReview={this.props.addReview} />
        <Reviews reviews={this.props.reviews.filter(r => r.restaurantId === this.props.restaurantId)}
          removeReview={this.props.removeReview} />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addReview: (text, restaurantId) => dispatch({ type: 'ADD_REVIEW', review: { text: text, restaurantId: restaurantId } }),
  removeReview: reviewId => dispatch({ type: 'REMOVE_REVIEW', reviewId: reviewId })
})

export default connect(state => ({ reviews: state.reviews }), mapDispatchToProps)(ReviewsContainer)
