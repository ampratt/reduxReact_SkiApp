import C from '../constants'
import appReducer from './reducers'
import { createStore, applyMiddleware } from 'redux'

// middleware for logging msgs to console
const consoleMessages = store => next => action => {

	let result

	console.groupCollapsed(`dispatching action => ${action.type}`)
	console.log('ski days', store.getState().allSkiDays.length);
	
	// dispatch the action!
	result = next(action)

	let { allSkiDays, goal, errors, resortNames } = store.getState()

	console.log(`

		After action
		============
		ski days: ${allSkiDays.length}
		goal: ${goal}
		fetching: ${resortNames.fetching}
		suggestions: ${resortNames.suggestions}
		errors: ${errors.length}
	
	`);

	console.groupEnd()

	return result

}

export default (initialState={}) => {
	return applyMiddleware(consoleMessages)(createStore)(appReducer, initialState)		//createStore(appReducer, initialState)
}



