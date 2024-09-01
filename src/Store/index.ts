import {createStore, applyMiddleware, Store} from 'redux';
import {thunk, ThunkMiddleware} from 'redux-thunk';

import {reducer} from './Reducers';
import {AppState, AppActions} from '../Types';

const store: Store<AppState, AppActions> & {
  dispatch: ThunkMiddleware<AppState, AppActions>;
} = createStore(reducer, applyMiddleware(thunk));

export default store;
