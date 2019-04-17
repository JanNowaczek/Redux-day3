import { createStore, combineReducers, applyMiddleware, compose } from 'redux'

import thunk from 'redux-thunk'

import users, { fetchUsersAsyncActionCreator } from './state/users'

const rootReducer = combineReducers({
    users,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)

store.dispatch(fetchUsersAsyncActionCreator(10))