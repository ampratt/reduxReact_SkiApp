import SkiDayCount from '../ui/SkiDayCount'
import { connect } from 'react-redux'

// grabs state from redux store and maps properties to child React component
const mapStateToProps = (state) => {

	return {
		total: state.allSkiDays.length,
		powder: state.allSkiDays.filter(day => day.powder).length,
		backcountry: state.allSkiDays.filter(day => day.backcountry).length
	}	

}

// higher order function that returns another function
// we send to that (2nd) the ui component to wrap
const Container = connect(mapStateToProps)(SkiDayCount)

export default Container;

// export default () =>
// 	<SkiDayCount total={100} powder={25} backcountry={10} />
