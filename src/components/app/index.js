import React, { Component } from 'react';
//import Redux from 'react-redux';
import { createStore } from 'redux';
import { connect } from 'react-redux';
//import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
//import logo from './logo.svg';
import Lists from '../lists';
import Footer from '../footer';
import { addTodo, deleteTodo, toggleTodo, setVisibilityFilter,VisibilityFilters } from "../../modules/app/actions"
import './styles.css';
window.id = 0;

class App extends Component{
  //新增todo输入框的keyup事件
  handleKeyUp = e => {
    if(e.keyCode === 13){
      this.props.onKeyUp(e.target.value)
      this.input.value = ''
    }
  }


  render(){
    const {todos,onDel,onToggle} = this.props;
    console.log('todos',todos)
    return(
      <section className="todo-container">
        <header className="todo-header">
          <h1>todos</h1>
          <input 
            ref={ref => this.input = ref} 
            type="input" 
            className="new-todo"
            placeholder="what needs to be done?" 
            onKeyUp={this.handleKeyUp} 
          />
        </header>
        <Lists todos={todos} onDel={onDel} onCheckChange={onToggle}/>
        <Footer count={todos.length} />
      </section>
      
    )
  }
}
function getVisibleTodos (todos, filter) {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.isCompleted)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.isCompleted)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}
function mapState(state){
  return {todos:getVisibleTodos(state.todos,state.visibilityFilter)}
}
function mapDispatch (dispatch,ownProps){
  return{
    onKeyUp: (val)=>{
      dispatch(addTodo(val))
    },
    onDel: (index) =>{
      dispatch(deleteTodo(index))
      window.id--;
    },
    onToggle:(index) => {
      dispatch(toggleTodo(index))
    }
  }
}
export default connect(mapState, mapDispatch)(App);

