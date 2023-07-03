import React from "react";
import { AppBar, Toolbar, Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <AppBar>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <h3>Blogs</h3>
          <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
            <Button>
              <Link style={{ color: "#fff", textDecoration: "none" }} to={"/"}>
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
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
