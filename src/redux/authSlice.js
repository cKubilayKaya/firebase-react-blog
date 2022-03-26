import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateCurrentUser, signOut } from "firebase/auth";
import { auth } from "../config/firebase";

const initialState = {
  name: "",
  email: "",
  password: "",
  error: null,
};

export const register = createAsyncThunk("auth/register", async ({ name, email, password }, { rejectWithValue }) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    await updateCurrentUser(auth, { displayName: name });
  } catch (e) {
    return rejectWithValue(e.code);
  }
});

export const login = createAsyncThunk("auth/login", async ({ email, password }, { rejectWithValue }) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (e) {
    return rejectWithValue(e.code);
  }
});

export const logOut = createAsyncThunk("auth/logout", async () => {
  await signOut(auth);
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    changeName: (state, action) => {
      state.name = action.payload;
    },
    changeEmail: (state, action) => {
      state.email = action.payload;
    },
    changePassword: (state, action) => {
      state.password = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const { changeEmail, changeName, changePassword } = authSlice.actions;
export default authSlice.reducer;
