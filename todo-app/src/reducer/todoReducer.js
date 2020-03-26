const initialValue = {
  data: []
};

export const todoReducer = (state = initialValue, action) => {
  switch (action.type) {
    case "CREATE_TODO":
      // console.log("payload", action.payload);
      return {
        ...state,
        data: [...state.data, action.payload]
      };
    default:
      return state;
  }
};
