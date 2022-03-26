import React, { useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import LoadingScreen from "../components/LoadingScreen";
import { useIsLoggedIn } from "../config/hooks";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem } from "@mui/material";

export default function Layout() {
  const isLoggedIn = useIsLoggedIn();

  const [anchorEl, setAnchorEl] = useState(null);

  if (isLoggedIn === null) return <LoadingScreen />;
  else if (isLoggedIn === false) return <Navigate replace to="/sign-in" />;
  return (
    <>
      <AppBar position="absolute">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Home
          </Typography>
          <IconButton size="large" color="inherit" onClick={(e) => setAnchorEl(e.currentTarget)}>
            <AccountCircle />
          </IconButton>
          <Menu open={Boolean(anchorEl)} anchorEl={anchorEl} onClose={() => setAnchorEl(null)}>
            <MenuItem onClick={() => setAnchorEl(null)}>Profile</MenuItem>
            <MenuItem onClick={() => setAnchorEl(null)}>Log out</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  );
}
