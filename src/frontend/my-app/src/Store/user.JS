

const store = createStore({
    todos: ['Create store', 'Wrap application', 'Use store'],
    addTodo: action((state, payload) => {
      state.todos.push(payload);
    }),
  });