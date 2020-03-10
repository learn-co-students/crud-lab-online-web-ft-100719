
import cuid from 'cuid';
export const cuidFn = cuid;

const initialState = {
  restaurants: [],
  reviews: []
}

export default function manageRestaurants(state = initialState, action) {
    switch ( action.type ) {
      case "ADD_RESTAURANT": 
        const restaurant = {
          text: action.text,
          id: cuid()
        }
        return { ...state, restaurants: state.restaurants.concat(restaurant)}
      case "DELETE_RESTAURANT": 
        return { ...state, restaurants: state.restaurants.filter( r => r.id !== action.id) }
        case "ADD_REVIEW": 
        const review = {
          text: action.review.text,
          restaurantId: action.review.restaurantId,
          id: cuid()
        }
        return { ...state, reviews: state.reviews.concat(review)}
        case "DELETE_REVIEW":
          return { ...state, reviews: state.reviews.filter( r=> r.id !== action.id )}
      default:
        return state  
    }
}
