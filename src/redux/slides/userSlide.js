import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  name: '',
  email: '',
  access_token: ''
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser: (state, action) => {
      console.log("state:", state);
      const {name, email, access_token} = action.payload;
      state.name = name || email;
      state.email = email;
      state.access_token = access_token;
      console.log('action', action);
    },
  },
})

// Action creators are generated for each case reducer function
export const { updateUser } = userSlice.actions;

export default userSlice.reducer;

// 29? 36pht