import C from './constants'
import appReducer from './store/reducers'
import initialState from './initialState.json'

let state = initialState

console.log(`

	Initial State
	=============
	goal: ${state.goal}
	resorts: ${JSON.stringify(state.allSkiDays)}
	fetching: ${state.resortNames.fetching}
	suggestions: ${state.resortNames.suggestions}

`);

state = appReducer(state, {
	type: C.SET_GOAL,
	payload: 2
})

state = appReducer(state, {
	type: C.ADD_DAY,
	payload: {
		"resort": "mt something",
		"date": "2017-12-2",
		"powder": false,
		"backcountry": true 
	}
})

state = appReducer(state, {
	type: C.CHANGE_SUGGESTIONS,
	payload: ["mt tallac", "mt hood", "mt something"]
})

console.log(`

	Next State
	=============
	goal: ${state.goal}
	resorts: ${JSON.stringify(state.allSkiDays)}
	fetching: ${state.resortNames.fetching}
	suggestions: ${state.resortNames.suggestions}

`);