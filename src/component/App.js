import React, { useState, useReducer } from 'react';
import Header from "./../Header";
import ToDoList from "./../todo/ToDoList";
import Input from "./../Input";
import { Context } from "./../Context.js";
import './../styles/App.css';
import  {reduser}  from "../functions/reduser";


function App() {

    const [uniqueId, setUniqueId] = useState(0);
    const [toDoList, dispatch] = useReducer(reduser, []);

    return (
        <Context.Provider value={{toDoList, dispatch, uniqueId, setUniqueId}}>
            <div className="App">
                <Header />
                <Input />
                <ToDoList />
            </div>
        </Context.Provider>
    );
}

export default App;