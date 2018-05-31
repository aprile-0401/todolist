import React, { Component } from 'react';
import ListItem from '../list-item';
import './styles.css';
import { deleteTodo } from '../../modules/app/actions';
import { connect } from 'react-redux';


class Lists extends Component {
  render() {
    const {todos,onCheckChange,onDel} = this.props;
    return (
      <ul>
        {         
            todos.map((todo) => {
              return (
                <ListItem todo={todo} key={todo.id} onDel={onDel} onCheckChange={onCheckChange}/>
              )
            })
        }
      </ul>
    )
  }
}

export default Lists