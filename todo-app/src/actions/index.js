export const createTodo = item => {
  return {
    type: "CREATE_TODO",
    payload: item
  };
};
