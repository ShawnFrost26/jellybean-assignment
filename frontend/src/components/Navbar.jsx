import React from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  useMediaQuery,
  IconButton,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const Navbar = () => {
  const isLargeScreen = useMediaQuery("(min-width: 1024px)");

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <h3>Blogs</h3>
          <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
            {isLargeScreen ? (
              <>
                <Button>
                  <Link style={{ color: "#fff", textDecoration: "none" }}
                   to={"/"}
                  >
                    Home
                  </Link>
                </Button>
                <Button>
                  <Link
                    style={{ color: "#fff", textDecoration: "none" }}
                    to={"/login"}
                  >
                    Login
                  </Link>
                </Button>
                <Button>
                  <Link
                    style={{ color: "#fff", textDecoration: "none" }}
                    to={"/register"}
                  >
                    Register
                  </Link>
                </Button>
              </>
            ) : (
              <>
                <IconButton
                  sx={{ color: "#fff" }}
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuItem onClick={handleClose}>
                    <Link
                      style={{ color: "#333", textDecoration: "none" }}
                      to={"/home"}
                    >
                      Home
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <Link
                      style={{ color: "#333", textDecoration: "none" }}
                      to={"/login"}
                    >
                      Login
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <Link
                      style={{ color: "#333", textDecoration: "none" }}
                      to={"/register"}
                    >
                      Register
                    </Link>
                  </MenuItem>
                </Menu>
              </>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
