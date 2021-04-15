export const initialState = {
  userCount: [],
};

const reducers = (state, action) => {
  console.log(action.payload.firstName);
  switch (action.type) {
    case "ADD_USER":
      return {
        ...state,
        userCount: [...state.userCount, action.payload],
      };

    case "UPDATE_USER":
      const updateUserData = action.payload;
      const updateUser = state.userCount.map((user) => {
        if (user.id === updateUserData.id) {
          if (updateUserData.firstName === "") {
            updateUserData.firstName = user.firstName;
          }
          if (updateUserData.lastName === "") {
            updateUserData.lastName = user.lastName;
          }
          if (updateUserData.email === "") {
            updateUserData.email = user.email;
          }
          if (updateUserData.password === "") {
            updateUserData.password = user.password;
          }
          return updateUserData;
        } else {
          return user;
        }
      });

      return {
        ...state,
        userCount: updateUser,
      };

    case "REMOVE_USER":
      return {
        ...state,
        userCount: state.userCount.filter((item) => item.id !== action.payload),
      };

    default:
      return state;
  }
};

export default reducers;
