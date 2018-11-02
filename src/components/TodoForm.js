import React from "react";
import style from './TodoForm.css';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            textValue: ''
        };
    }

    changeText(val) {
        this.setState({textValue: val});
    }

    render() {
        return (
            <div className={style.TodoForm}>
                <input onChange={ (event) => this.changeText(event.target.value) }/>
                <button onClick={ () => this.props.addTask(this.state.textValue) }>Add</button>
            </div>
        );
    }
}

export default TodoForm;