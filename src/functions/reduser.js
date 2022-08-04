
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
            return state.filter((todo, index) => {
                return todo.id !== action.id;
            })
            console.log('state');
            return state;
        case "Add":
            return [...state, action.todo];
        default:
            return state;
    }
}

