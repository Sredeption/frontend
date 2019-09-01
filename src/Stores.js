import {layoutReducer} from "./layout/store/Reducer";
import {viewReducer} from "./view/store/Reducer";
import thunkMiddleware from "redux-thunk";
import {createStore, combineReducers, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";


const rootReducer = combineReducers({
  layout: layoutReducer,
  view: viewReducer
});

export function configureStore() {
  const middleWareEnhancer = applyMiddleware(thunkMiddleware);

  const store = createStore(
    rootReducer,
    composeWithDevTools(middleWareEnhancer)
  );
  return store
}