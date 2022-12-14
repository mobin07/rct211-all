
import { applyMiddleware, combineReducers, compose, legacy_createStore } from 'redux';
import thunk from 'redux-thunk';
import {reducer as AppReducer} from './AppReducer/reducer';
import {reducer as AuthReducer} from './AuthReducer/reducer';
const rootReducer=combineReducers({
    auth:AuthReducer,
    app:AppReducer
})
const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;
export const store=legacy_createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)))
