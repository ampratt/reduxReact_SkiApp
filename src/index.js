import storeFactory from './store'
import { suggestResortNames } from './actions'

// application should use the store. Store should not be application
// store contains data
const store = storeFactory()

store.dispatch(
	suggestResortNames("hea")
)
