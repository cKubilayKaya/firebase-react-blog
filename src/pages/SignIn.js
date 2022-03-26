import React from "react";
import { TextField, CssBaseline, Button, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function SignIn() {
  return (
    <div className="container">
      <CssBaseline />
      <Typography variant="h5" sx={{ textAlign: "center" }}>
        Sign in
      </Typography>
      <Box component="form">
        <TextField fullWidth margin="normal" label="Email Address" required autoComplete="email" autoFocus />
        <TextField fullWidth margin="normal" label="Password" required type="password" />
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
