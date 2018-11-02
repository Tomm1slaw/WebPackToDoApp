import React from 'react';
import style from './TodoList.css';
import Todo from './Todo';

const TodoList = ({tasks, remove}) => {
    const todoList = tasks.map(task => {
        return <Todo item={task} removeItem={remove} key={task.id} />
    });

    return (
        <ul className={style.TodoList} >
            { todoList }
        </ul>
    );
};

export default TodoList