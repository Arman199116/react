import React, {useContext} from 'react';
import ToDo from './ToDo';
import { Context } from "./../Context";

const ToDoList = () => {
    const {toDoList} = useContext(Context);
    return (
        <div>
            {toDoList.map((todo, index) => {
                return (
                    <ToDo key={todo.id} todo={todo} index={index + 1} />
                )
            })}
        </div>
    );
};

export default ToDoList;