import { createStore, compose, applyMiddleware } from 'redux'
import { rootReducers } from './reducers'
import thunk from 'redux-thunk';
// 能过createStore创建一个store，把counterReducer传到createStore
const store = createStore(
	rootReducers,
	compose(
		applyMiddleware(...[thunk]),// 需要使用的中间件数组
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
)
export default store
