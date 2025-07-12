import { createSlice, createAction } from '@reduxjs/toolkit';
const signOutAction = createAction('signout');

const initialState = {
  loginResponse: null,
  loginError: null,
};

const updateLoginResponseReducer = (state, action) => {
  state.loginResponse = action.payload;
};

const updateLoginErrorReducer = (state, action) => {
  state.loginError = action.payload;
};

// REDUCER
const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder.addCase(signOutAction, state => {
      return initialState;
    });
  },
  reducers: {
    updateLoginResponse: updateLoginResponseReducer,
    updateLoginError: updateLoginErrorReducer,
  },
});

// ACTIONS
const {
  updateLoginResponse,
  updateLoginError,
} = authSlice.actions;

// SELECTOR
const selectLoginResponse = ({ auth }) => auth.loginResponse;
const selectLoginError = ({ auth }) => auth.loginError;

const authSliceReducer = authSlice.reducer;

export {
  updateLoginResponse,
  updateLoginError,
  selectLoginResponse,
  selectLoginError,
  authSliceReducer,
};
