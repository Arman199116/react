import React, {useContext} from 'react';
import ToDo from './ToDo';
import { Context } from "./../Context";

const ToDoList = () => {
    const {toDoList} = useContext(Context);
    return (
        <div>
            {toDoList.map(todo => {
                return (
                    <ToDo key={todo.id} todo={todo} />
                )
            })}
        </div>
    );
};

export default ToDoList;