import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {
  render() {
    const restaurantsList =  this.props.restaurants.map(restaurant => <Restaurant 
      key={restaurant.id} 
      restaurant={restaurant} 
      deleteRestaurant={this.props.deleteRestaurant}/>)

    return(
      <ul>
        {restaurantsList}
      </ul>
    );
  }
};

export default Restaurants;