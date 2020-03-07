import React, { Component } from 'react';

class RestaurantInput extends Component {
  state = {
    text: '',
    id: ''
  }

  handleOnChange(event) {
    const {name, value} = event.target
    this.setState({
      [name] : value,
    });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.addRestaurant(this.state.text);
    this.setState({
      text: '',
      id: ''
    });
  }
  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
        <label>
            Enter Restaurant Name:
          <input
            type="text"
            name="text"
            value={this.state.text}
            onChange={(event) => this.handleOnChange(event)} />
          </label>
          <input type="submit" value="Add Restaurant" />
        </form>
      </div>
    );
  }
};

export default RestaurantInput;

