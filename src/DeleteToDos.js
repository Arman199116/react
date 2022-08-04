import React, {useContext} from "react";
import { Context } from "./Context";

export default function Delete({id}) {
    const {dispatch, setUniqueId, uniqueId} = useContext(Context);
    function deleteToDo() {
       dispatch({type : "Delete", id : id});
       setUniqueId(uniqueId + 1);
    }
    return (
        <button onClick={deleteToDo} > 
            Delete
        </button>
    )
}