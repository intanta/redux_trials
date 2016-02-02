import * as types from '../constants/ActionTypes'
import fetch from 'isomorphic-fetch'

export function printJson(data) {
  return { type: types.PRINT_JSON, data }
}

export function printError(error) {
  return { type: types.ERROR, error }
}

export function getJson() {
  return function(dispatch) {
	  fetch('http://beta.json-generator.com/api/json/get/Vy-l1uwKg').then (
		response => {return response.json()}
	  ).then(
	  json => {dispatch (printJson(JSON.stringify(json)))});
  }
}
