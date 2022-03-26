import React from "react";
import { TextField, CssBaseline, Button, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="container">
      <CssBaseline />
      <Typography variant="h5" sx={{ textAlign: "center" }}>
        Sign up
      </Typography>
      <Box component="form">
        <TextField fullWidth margin="normal" label="Name" required Complete="name" autoFocus />
        <TextField fullWidth margin="normal" label="Email Address" required autoComplete="email" />
        <TextField fullWidth margin="normal" label="Password" required type="password" />
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
