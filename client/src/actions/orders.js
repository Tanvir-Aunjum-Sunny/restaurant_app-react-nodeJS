import * as types from './allTypes';

export function addOrder(order) {
  return{
    type:types.ADD_ORDER,
    payload:order
  }
}

export function addActiveOrder(order){
  return{
    type:types.ADD_ACTIVE_ORDER,
    payload:order
  }
}