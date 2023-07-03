import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import Actions from "./Actions";

export default function BlogCard({ blog }) {
  const { _id, title, content, image, author, createdAt } = blog;

  return (
    <Card sx={{ maxWidth: 345 }} id={_id}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {author[0].name.slice(0, 1)}
          </Avatar>
        }
        action={
          <Actions/>
        }
        title={title}
        subheader={new Date(createdAt).toDateString()}
      />
      <CardMedia component="img" height="194" image={image} alt="Blog Image" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {content}
        </Typography>
      </CardContent>
    </Card>
  );
}
