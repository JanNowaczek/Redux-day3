import { createStore, combineReducers, applyMiddleware, compose } from 'redux'

import thunk from 'redux-thunk'

import users from './state/users'
import counter, { startCounterSyncAsyncAction }from './state/counter'

const rootReducer = combineReducers({
    users,
    counter,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)

store.dispatch(startCounterSyncAsyncAction())
