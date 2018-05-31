import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setVisibilityFilter } from "../../modules/app/actions";

class FooterList extends Component {
  render(){
    const { onClick, visibilityFilter, filter, children } = this.props
    const classes = visibilityFilter === filter ? 'selected' : '';
    return (
      <li onClick={onClick} className={classes}>{children}</li>
    )
  }
}

function mapDispatch (dispatch,ownProps){
  return{
    onClick: ()=>{
      dispatch(setVisibilityFilter(ownProps.filter))
    }
  }
}
export default connect(state=>{
  return {visibilityFilter:state.visibilityFilter}
},
   mapDispatch
  )(FooterList)