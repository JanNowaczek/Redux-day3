import { createStore, combineReducers } from 'redux'

import users from './state/users'

const rootReducer = combineReducers({
    users,
})

export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)