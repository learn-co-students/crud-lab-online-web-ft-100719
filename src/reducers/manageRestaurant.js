
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = { restaurants: [], reviews: [] }, action) {
  switch (action.type) {
    case 'ADD_RESTAURANT':
      return { ...state, restaurants: [...state.restaurants, { text: action.restaurantName, id: cuid() }] }
    case 'REMOVE_RESTAURANT':
      return { ...state, restaurants: state.restaurants.filter(r => r.id !== action.restaurantId) }
    case 'ADD_REVIEW':
      return { ...state, reviews: [...state.reviews, { ...action.review, id: cuid() }] }
    case 'REMOVE_REVIEW':
      return { ...state, reviews: state.reviews.filter(r => r.id !== action.reviewId) }
    default:
      return state
  }
}
