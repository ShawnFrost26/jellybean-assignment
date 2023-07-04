import React, { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";

const RegisterPage = () => {
  const [user, setUser] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <Card
      sx={{
        p: 4,
        py: 5,
        maxWidth: "550px",
        margin: "50px auto",
        display: "flex",
        flexDirection: "column",
        gap: 3,
        borderRadius: "15px",
      }}
      elevation={10}
    >
      <CardContent sx={{ m: 0 }}>
        <Typography gutterBottom variant="h5" component="div">
          Register
        </Typography>
      </CardContent>
      <TextField
        id="name"
        label="Name"
        variant="outlined"
        type="text"
        name="name"
        onChange={handleChange}
        value={user.name}
      />
      <TextField
        id="email"
        label="Email"
        variant="outlined"
        type="email"
        name="email"
        onChange={handleChange}
        value={user.email}
      />
      <TextField
        id="password"
        label="Password"
        variant="outlined"
        type="password"
        name="password"
        onChange={handleChange}
        value={user.password}
      />
      <Button variant="contained" onClick={handleSubmit}>
        Register
      </Button>
    </Card>
  );
};

export default RegisterPage;
