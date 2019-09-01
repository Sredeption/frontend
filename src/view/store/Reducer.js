import {RECEIVE_HELLO} from "./Type";

const initialState = {
  hello: undefined
};

export function viewReducer(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_HELLO:
      return {...state, hello: action.data};
    default:
      return state;
  }
}
