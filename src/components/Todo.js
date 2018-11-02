import React from "react";
import style from './Todo.css';

const Todo = ({item, removeItem}) => {
    return (
        <li className={style.Todo}>
        	<div>
        		{item.text}
        	</div>
            <button onClick={ () => removeItem(item.id) }>X</button>
        </li>
    );
}

export default Todo;