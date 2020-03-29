const initialValue = {
  data: []
};

export const todoReducer = (state = initialValue, action) => {
  switch (action.type) {
    case "CREATE_TODO":
      return {
        ...state,
        data: [...state.data, action.payload]
      };
    case "DELETE_TODO":
      const removeTodo = state.data.filter(
        item => item.id !== action.payload.id
      );
      // console.log(removeTodo);
      return {
        ...state,
        data: removeTodo
      };
    default:
      return state;
  }
};
