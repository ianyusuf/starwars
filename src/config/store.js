import { createStore, combineReducers, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import appReducer from '../reducers/app'
import gigsReducer from '../reducers/gigs'
import artistReducer from '../reducers/artist'

const reducers = combineReducers({
    app: appReducer,
    artist: artistReducer,
    gigs: gigsReducer,
})

const middleware = applyMiddleware(logger, thunk)

export default createStore(reducers, middleware)