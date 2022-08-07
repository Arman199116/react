import React, { useState, useRef, useContext } from 'react';
import { Context } from "./Context";

const Input = () => {

    const {uniqueId, setUniqueId, dispatch} = useContext(Context);
    const inputRef = useRef(null);
    const [inputValue, setInputValue] = useState('');

    const onAddHandler = () => {
        if (!inputValue) {
            return;
        }
        setUniqueId(uniqueId + 1);
        console.log(uniqueId);
        const toDo = {
            id: uniqueId,
            title: inputValue,
            completed: false
        };

        dispatch({type : "Add", todo : toDo});

        setInputValue('');
        inputRef.current.value = "";
        inputRef.current.focus();
    }

    return (
        <div className="box">
            <input ref={inputRef} onChange={(e) => {setInputValue(e.target.value)}} placeholder={'New ToDo'} />
            <button onClick={ onAddHandler }>Add</button>
        </div>
    );
};

export default Input;