import { combineReducers } from 'redux';

import movieReducer from './movieReducer';
import favoritesReducer from "./favoritesReducer";

export const rootReducer = combineReducers({
  movieReducer, favoritesReducer
})

export default rootReducer;