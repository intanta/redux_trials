import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Actions from '../actions'

class App extends Component {

  render() {
	const { data, actions } = this.props
    return (
	<div>
		<p>{data} </p>
		<button onClick = {actions.getJson}> Request </button>
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
