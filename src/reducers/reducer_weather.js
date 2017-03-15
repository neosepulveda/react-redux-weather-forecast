import { FETCH_WEATHER } from '../actions/index':

export default function(state = [], action) {
  switch(action.type) {
  case FETCH_WEATHER:
    //DON'T DO THIS! WE DON'T MANIPULATE STATE DIRECTLY IN REDUX.
    //This is called mutating the state
    //return state.push(action.payload.data);

    //We have to return a completely new and fresh copy of state:

    // return state.concat([action.payload.data]); 
    //concat is a better approach because it gives a new instance of state

    return [ action.payload.data, ...state ]; //Fancy ES6 syntax
    //[ city, city, city ], NOT [ city, [ city, city, city ] ]
  }

  return state;
}
