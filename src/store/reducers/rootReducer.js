const initState = {
  users: [
    { id: 1, name: "John" },
    { id: 2, name: "John1" },
  ],
  post: [
    { id: 3, name: "John" },
    { id: 4, name: "John" },
  ],
};
const rootReducer = (state = initState, action) => {
  console.log(state);
  //state nơi lưu trữ data của redux
  switch (action.type) {
    case "DELETE_USER":
      console.log(">>>> run into delete user", action);
      let users = state.users;

      users = users.filter((item) => item.id !== action.payload.id);
      console.log("check user1", users);

      // state.users = usersCopy;
      console.log("check user1", state);
      return { ...state, users };
      return state;
    case "ADD_USER":
      let id = Math.floor(Math.random() * 10000);
      let user = { id: id, name: `random ${id}` };
      return { ...state, users: [...state.users, user] };
    default:
      return state;
  }
};

export default rootReducer;
