import { combineReducers } from 'redux'

import {
  ADD_TODO,
  TOGGLE_TODO,
  DELETE_TODO,
  SET_VISIBILITY_FILTER,
  VisibilityFilters
} from '../actions'
const { SHOW_ALL } = VisibilityFilters



function visibilityFilter(state = SHOW_ALL, action) {
  console.log('action',action)
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

 function todos(state = [], action) {
  console.log("actions", action)
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          id: window.id++,
          isCompleted: false
        }
      ]
      case TOGGLE_TODO:
        return state.map((todo, index) => {
          if (index === action.index) {
            return Object.assign({}, todo, {
              isCompleted: !todo.isCompleted
            })
          }
          return todo
        })
      case DELETE_TODO:
        return state.filter((todo)=>{
          if(todo.id !== action.index) return todo
        }).map((todo)=>{
          if(todo.id>action.index) {
            return Object.assign({},todo,{
            id : todo.id-1
          })}else{
            return todo
          }
        })
    default:
       return state
  }
}

export default combineReducers({
  todos,
  visibilityFilter,
})
