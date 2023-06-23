import Storage from "./extension/LocalStorage.js";

const init = {
    todos: Storage.get(),
    filter: 'all',
    filters: {
        all: () => true,
        active: (todo) => !todo.completed,
        completed: (todo) => todo.completed
    },
    editIndex: null
}

const actions = {
    ADD({ todos }, title) {
        if(title) {
            todos.push({ title, completed: false });
            Storage.set(todos);
        }
    },
    DELETE({ todos }, index) {
        todos.splice(index, 1);

        Storage.set(todos);
    },
    TOGGLE({ todos }, index) {
        todos[index].completed = !todos[index].completed;
        Storage.set(todos);
    },
    TOGGLEALL({ todos }, checkState) {
        todos.forEach(todo => todo.completed = checkState);
        Storage.set(todos);
    },
    CHANGE_FILTER(state, filterState) {
        state.filter = filterState;
    },
    CLEAR_COMPLETED(state) {
        state.todos = state.todos.filter(state.filters.active);
        Storage.set(todos);
    },
    EDIT(state, index) {
        state.editIndex = index;
    },
    CANCEL_EDIT(state) {
        state.editIndex = null;
    },
    FINISH_EDIT(state, title) {
        if(state.editIndex !== null) {
            if (title) state.todos[state.editIndex].title = title;
            else this.DELETE(state, state.editIndex);

            state.editIndex = null;
            Storage.set(state.todos);
        }
    }

}

export default function reducer(state = init, action, args) {
    actions[action] && actions[action](state, ...args);
    return state;
}