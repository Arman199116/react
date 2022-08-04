export function reduser (state, action) {
    switch (action.type) {
        case "Complete":
            return state.map(todo => {
                if (todo.id === action.id) {
                    return {
                        ...todo, complete : !todo.complete
                    };
                } else {
                    return todo;
                }
            });
        case "Delete":
            return state.filter((todo) => {
                return todo.id !== action.id;
            })
        case "Add":
            return [...state, action.todo];
        default:
            return state;
    }
}

