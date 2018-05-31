import React, { Component } from 'react';
import './styles.css';


export default class TodoInput extends Component {
    render() {
        const {todo,onDel} = this.props;
        return (
            <div className="todo-input">
                <input value={todo.text}/>
                <button className="todo-del" onClick={()=>onDel(todo.id)}></button>
            </div>
        );
    }
}


