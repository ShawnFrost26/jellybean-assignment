import React from "react";
import {
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";

const LoginPage = () => {
  return (
    <Card
      sx={{
        p: 4,
        py: 5,
        maxWidth: "550px",
        margin: "50px auto",
        display: "flex",
        flexDirection: "column",
        gap: 4,
        borderRadius: "15px",
      }}
      elevation={10}
    >
      <CardContent sx={{ m: 0 }}>
        <Typography gutterBottom variant="h5" component="div">
          Login
        </Typography>
      </CardContent>
      <TextField id="email" label="Email" variant="outlined" type={"email"} />
      <TextField
        id="password"
        label="Password"
        variant="outlined"
        type={"password"}
      />
      <Button variant="contained">Login</Button>
    </Card>
  );
};

export default LoginPage;
