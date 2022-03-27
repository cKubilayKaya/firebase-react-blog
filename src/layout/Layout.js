import React, { useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import LoadingScreen from "../components/LoadingScreen";
import { useCurrentUser, useIsLoggedIn } from "../config/hooks";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem, Dialog, DialogTitle, DialogContent, Avatar, DialogActions, Button } from "@mui/material";
import { Box } from "@mui/system";
import { logOut } from "../redux/authSlice";
import { useDispatch } from "react-redux";
import { auth } from "../config/firebase";

export default function Layout() {
  const isLoggedIn = useIsLoggedIn();
  const currentUser = useCurrentUser();
  const dispatch = useDispatch();

  const [profileDialogOpen, setProfileDialogOpen] = useState(false);
  const [logOutDialogOpen, setLogOutDialogOpen] = useState(false);

  console.log(currentUser);

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
            <MenuItem
              onClick={() => {
                setAnchorEl(null);
                setProfileDialogOpen(true);
              }}
            >
              Profile
            </MenuItem>
            <MenuItem
              onClick={() => {
                setAnchorEl(null);
                setLogOutDialogOpen(true);
              }}
            >
              Log out
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <Dialog open={profileDialogOpen} onClose={() => setProfileDialogOpen(false)}>
        <DialogTitle>Profile</DialogTitle>
        <DialogContent dividers>
          <Box display="flex" alignItems="center">
            <Avatar />
            <Box ml={3}>
              <Typography>Kullanıcı Adı</Typography>
              <Typography>{currentUser?.email}</Typography>
            </Box>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setProfileDialogOpen(false)}>Cancel</Button>
        </DialogActions>
      </Dialog>
      <Dialog open={logOutDialogOpen} onClose={() => setLogOutDialogOpen(false)}>
        <DialogTitle>Log out</DialogTitle>
        <DialogContent dividers>
          <Box display="flex" alignItems="center">
            <Box>
              <Typography>Do you want to log out?</Typography>
            </Box>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setLogOutDialogOpen(false)}>Cancel</Button>
          <Button
            onClick={() => {
              setLogOutDialogOpen(false);
              dispatch(logOut(auth));
            }}
          >
            Yes
          </Button>
        </DialogActions>
      </Dialog>
      <Outlet />
    </>
  );
}
