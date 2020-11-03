import React, { Component } from 'react';
import Todos from './Todos';
class TodoItem extends Component {     
    
  render (){
    return(
      <li key="Todos">
          <strong>{this.props.todo.title}</strong>
      </li>
      
    );
  }  
}


export default TodoItem;