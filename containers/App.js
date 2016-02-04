import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Actions from '../actions'

class App extends Component {

  render() {
	const { data, actions } = this.props;
	var handle = function ()
	{
		var intervalId = setInterval(actions.getJson,1000);
		setTimeout(function(){clearInterval(intervalId)},10000);
	};
    return (
	<div>
		<p>{data} </p>
		<button onClick = {handle}> Request </button>
	</div>
    )
  }
}

App.propTypes = {
  data: PropTypes.string.isRequired
}

function mapStateToProps(state) {
  return {
    data: state.data
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App)
