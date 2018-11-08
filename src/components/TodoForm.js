import React from "react";
import style from "./TodoForm.css";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      textValue: '',
    };
  }

  changeText(event) {
    this.setState({
      textValue: event.target.value
    });
  }

   onAddTask() {
    this.state.textValue.trim() === "" ?
    this.setState({
        textValue: ''
      }) :
    this.props.addTask(this.state.textValue) 
    this.setState({
        textValue: ''
      })
  }

  render() {
    return (
      <div className={style.TodoForm}>
        <input
          value={this.state.textValue}
          onChange={this.changeText.bind(this)}
        />
        <button
          onClick={this.onAddTask.bind(this)}>
          Add
        </button>
      </div>
    );
  }
}

export default TodoForm;