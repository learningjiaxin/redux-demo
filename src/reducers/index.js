import { combineReducers } from 'redux'
import { counterReducer } from './counter_reducers'
import { postReducer } from './post_reducers'
export const rootReducers = combineReducers({
	counter: counterReducer,
	post: postReducer
})
