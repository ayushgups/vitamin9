import { createStore } from 'redux';

// Initial State
const initialState = {
  tasks: []
};

// Reducer
function taskReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TASK':
      return { ...state, tasks: [...state.tasks, action.payload] };
    case 'DELETE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter((_, index) => index !== action.payload)
      };
    default:
      return state;
  }
}

// Create Store
const store = createStore(taskReducer);
export default store;
