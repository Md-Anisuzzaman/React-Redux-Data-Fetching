import {createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import todosReducer from "./Services/Reducers/DefineReducer";


const store = createStore(todosReducer, applyMiddleware(thunk));

export default store;
