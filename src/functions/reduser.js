
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
            state.find((todo, index) => {
                if (todo.id === action.id) {
                    state.splice(index, 1);
                    return state;
                }
            })
            return state;
        case "Add":
            return [...state, action.todo];
        default:
            return state;
    }
}

