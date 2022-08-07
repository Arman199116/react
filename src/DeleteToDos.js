import React, {useContext} from "react";
import { Context } from "./Context";

export default function Delete({id}) {
    const {dispatch} = useContext(Context);
    function deleteToDo() {
        dispatch({type : "Delete", id : id});
    }
    return (
        <button className="extra" onClick={deleteToDo} > 
            Delete
        </button>
    )
}