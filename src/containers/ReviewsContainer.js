import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import { connect } from 'react-redux'
import { addReview, deleteReview } from '../actions/reviews'

class ReviewsContainer extends Component {
  state = {
    reviews: []
  }

  render() {
    return (
      <div>
        <ReviewInput addReview={this.props.addReview} restaurantId={this.props.restaurantId} />
        <Reviews reviews={this.props.reviews} deleteReview={this.props.deleteReview} restaurantId={this.props.restaurantId} />
      </div>
    )
  }
}

const mapStateToProps = state => (
  { reviews: state.reviews }
)

export default connect(mapStateToProps, { addReview, deleteReview })(ReviewsContainer)
