import React from "react";
import { TextField, CssBaseline, Button, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { changeName, changeEmail, changePassword } from "../redux/authSlice";

export default function SignUp() {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  console.log(auth);

  return (
    <div className="container">
      <CssBaseline />
      <Typography variant="h5" sx={{ textAlign: "center" }}>
        Sign up
      </Typography>
      <Box component="form">
        <TextField
          fullWidth
          margin="normal"
          label="Name"
          required
          complete="name"
          autoFocus
          onChange={(e) => dispatch(changeName(e.currentTarget.value))}
          value={auth.name}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Email Address"
          required
          autoComplete="email"
          onChange={(e) => dispatch(changeEmail(e.currentTarget.value))}
          value={auth.email}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Password"
          required
          type="password"
          onChange={(e) => dispatch(changePassword(e.currentTarget.value))}
          value={auth.password}
        />
        <Button type="submit" fullWidth sx={{ mt: 2 }} variant="contained">
          Signup
        </Button>
        <div className="d-flex justify-content-center mt-16">
          <Link to="/sign-in">Sign in</Link>
        </div>
      </Box>
    </div>
  );
}
