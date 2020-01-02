import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { RootReducer } from './reducers/root/root-reducer';

const initialState = {};

const middleware = [thunk];

const store = createStore(
    RootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;