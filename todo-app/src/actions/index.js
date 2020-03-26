export const createTodo = item => {
  return {
    type: "CREATE_TODO",
    payload: item
  };
};

export const deleteTodo = item => {
  return {
    type: "DELETE_TODO",
    payload: item
  };
};
