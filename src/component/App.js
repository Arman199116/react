import React, { useState, useReducer } from 'react';
import Header from "./../Header";
import ToDoList from "./../todo/ToDoList";
import Input from "./../Input";
import { Context } from "./../Context.js";
import './../styles/App.css';
import  {reduser}  from "../functions/reduser";
import  UseTransition  from "./../UseTransition";
import  UseImperativeHandle  from "./../UseImperativeHandle";

function App() {

    const [uniqueId, setUniqueId] = useState(0);
    const [toDoList, dispatch] = useReducer(reduser, []);

    return (
        <Context.Provider value={{toDoList, dispatch, uniqueId, setUniqueId}}>
            <Header />
            <Input />
            <ToDoList />
            <UseTransition />
            <UseImperativeHandle />
        </Context.Provider>
    );
}

export default App;