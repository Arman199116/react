import React, { useEffect, useState, useContext } from 'react';
import Delete from "./../DeleteToDos";
import { Context } from "./../Context";

const ToDo = ({todo}) => {

    const {dispatch} = useContext(Context);
    const [calculation, setCalculation] = useState(0);

    useEffect(() => {
        setCalculation(() => todo.task.length);
    }, [todo.task.length])

    const setValue = () => {
        dispatch({type : 'Complete', id : todo.id});
    };
    return (
        <div className="box">
            <div>{todo.task} length - {calculation} </div>
            <input type="checkbox" checked={todo.complete} onChange={setValue} />
            <Delete id={todo.id} />
        </div>

    );
};

export default ToDo;