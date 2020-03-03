import React, { Component } from 'react';
import Restaurant from './Restaurant'
import { connect } from 'react-redux';
import { deleteRestaurant } from '../../actions/restaurants'

class Restaurants extends Component {

  render() {
    let renderRestaurants = this.props.restaurants.map(rest => <Restaurant key={rest.id} restaurant={rest} deleteRestaurant={this.props.deleteRestaurant} />)
    return(
      <ul>
        {renderRestaurants}
      </ul>
    );
  }
};

const mapStateToProps = state => {
  return {
    restaurants: state.restaurants
  }
}

export default connect(mapStateToProps, { deleteRestaurant })(Restaurants);