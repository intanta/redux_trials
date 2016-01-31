import { PRINT_JSON, ERROR } from '../constants/ActionTypes' 

const initialState = 
  {
    data: 'Ready for request...'
  }
  
const rootReducer = function(state = initialState, action){
  switch (action.type) {
    case PRINT_JSON:
      return Object.assign({}, state, {
        data: action.data
      });

    case ERROR:
      return Object.assign({}, state, {
        data: action.error
      });

    default:
      return state
  }
};

export default rootReducer
