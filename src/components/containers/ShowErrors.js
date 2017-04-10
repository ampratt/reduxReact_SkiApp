import ShowErrors from '../ui/ShowErrors'
import { clearError } from '../../actions'
import { connect } from 'react-redux'

// grabs state from redux store and maps to props of React component
const mapStateToProps = state => {
	return {
		errors: state.errors
	}
}

// receive store's dispatch function as arg
// any func props that require actions, use store's 
//   -> dispatch method by returning obj that maps funcs to props
const mapDispatchToProps = (dispatch) => {
	return {
		onClearError(index) {
			dispatch(
				clearError(index)
			)
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowErrors)

// export default () =>
// 	<ShowErrors errors={['sample error']}
// 			    onClearError={index => console.log('todo: clear error at', index)} />
