import cuid from 'cuid';
import { combineReducers } from 'redux';

export const cuidFn = cuid;

const manageRestaurant = combineReducers({
  restaurants: manageRestaurants,
  reviews: manageReviews
});

export default manageRestaurant;

function manageRestaurants(state = [], action) {
  switch (action.type) {
    case 'ADD_RESTAURANT':
      return [...state, { id: cuid(), ...action.restaurant }];
    case 'DELETE_RESTAURANT':
      return state.filter(restaurant => restaurant.id !== action.restaurantId);
    default:
      return state;
  }
}

function manageReviews(state = [], action) {
  switch (action.type) {
    case 'ADD_REVIEW':
      return [...state, { id: cuid(), ...action.review }];

    case 'DELETE_REVIEW':
      return state.filter(review => review.id !== action.reviewId);
    default:
      return state;
  }
}
