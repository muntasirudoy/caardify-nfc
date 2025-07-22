import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type UserStateDto = {
  id: string;
  email: string;
  name: string;
  phone_number: string;
};
const initialState: UserStateDto = {
  id: "",
  email: "",
  name: "",
  phone_number: "",
};

const userSlice = createSlice({
  name: `user`,
  initialState: initialState satisfies UserStateDto,
  reducers: {
    setUser(state, action: PayloadAction<UserStateDto>) {
      state.name = action.payload.name;
      state.id = action.payload.id;
      state.email = action.payload.email;
      state.phone_number = action.payload.phone_number;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
