import React, { Component } from 'react';
import Todoinput from '../todo-input'
import './styles.css';


//const element = <h1>hello world!</h1>;
export default class ListItem extends Component {
  render() {
    const {todo,onCheckChange,onDel}=this.props;
    return (
      <li className="todo-list">
        <input type="checkbox" checked={todo.isCompleted ? 'checked':''} onChange={()=>onCheckChange(todo.id)} className="check-input"/>
        <Todoinput todo={todo} onDel={onDel} />
      </li>

    );
  }
}

