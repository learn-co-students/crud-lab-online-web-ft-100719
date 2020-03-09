export const addRestaurant = text => {
  return {
    ...text,
    type: 'ADD_RESTAURANT',
  }
}

export const deleteRestaurant = id => {
  return {
    type: 'DELETE_RESTAURANT',
    id: id
  }
}