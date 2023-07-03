import React from 'react'
import { Button, Card, CardContent, TextField, Typography } from "@mui/material";

const RegisterPage = () => {
  return (
    <Card sx={{ p: 4, py: 5, maxWidth: "550px", margin: "50px auto", display: "flex", flexDirection: "column", gap: 3, borderRadius: "15px" }} elevation={10}>
    <CardContent sx={{ m: 0 }}>
      <Typography gutterBottom variant="h5" component="div">
      Register
      </Typography>
    </CardContent>
      <TextField id="outlined-basic" label="Name" variant="outlined" type={"text"} />
      <TextField id="outlined-basic" label="Email" variant="outlined" type={"email"} />
      <TextField id="outlined-basic" label="Password" variant="outlined" type={"password"}/>
<Button variant="contained">Register</Button>
    </Card>
  )
}

export default RegisterPage