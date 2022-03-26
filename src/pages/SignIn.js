import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { TextField, CssBaseline, Button, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { changeEmail, changePassword } from "../redux/authSlice";

export default function SignIn() {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <CssBaseline />
      <Typography variant="h5" sx={{ textAlign: "center" }}>
        Sign in
      </Typography>
      <Box component="form">
        <TextField
          fullWidth
          margin="normal"
          label="Email Address"
          required
          autoComplete="email"
          autoFocus
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
          Sign in
        </Button>
        <div className="d-flex justify-content-between mt-16">
          <Link to="#">Forgot Password?</Link>
          <Link to="/sign-up">Sign Up</Link>
        </div>
      </Box>
    </div>
  );
}
