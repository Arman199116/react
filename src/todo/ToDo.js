import React, { useContext } from 'react';
import Delete from "./../DeleteToDos";
import { Context } from "./../Context";

const ToDo = ({todo, index}) => {

    const {dispatch} = useContext(Context);

    const setValue = () => {
        dispatch({type : 'Complete', id : todo.id});
    };
    return (
        <div className="box">
            <div>{index} {todo.title} </div>
            <input type="checkbox" checked={todo.completed} onChange={setValue} />
            <Delete id={todo.id} />
        </div>

    );
};

export default ToDo;