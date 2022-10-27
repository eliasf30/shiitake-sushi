import {  createStore } from 'redux';



import {rootReducer} from './root-reducer';

const initialState = {};


export const store = createStore(
  rootReducer,
  initialState,

);


