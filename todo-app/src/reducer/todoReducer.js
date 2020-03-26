const initialValue = {
  data: [
    {
      todo: "make homework",
      id: "1"
    }
  ]
};

export const todoReducer = (state = initialValue, action) => {
  switch (action.type) {
    case "CREATE_TODO":
      console.log("payload", action.payload);
      return {};
    default:
      return state;
  }
};
