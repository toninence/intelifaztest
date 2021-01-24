import React, { useEffect } from "react";

import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import {
  DeleteOutlineOutlined as DeleteIcon,
  MoreVert as MoreVertIcon,
} from "@material-ui/icons/";
import { Link } from "react-router-dom";

export default function UserCard({ user, index, deleteUser }) {
  const classes = useStyles();
  const { nombre, apellido, direccion, avatar, email } = user;
  return (
    <Grid item xs={12} sm={6} md={4} className={classes.grid}>
      <Card>
        <CardHeader
          avatar={
            <Avatar className={classes.avatarContainer}>
              <img className={classes.avatar} src={avatar} />
            </Avatar>
          }
          action={
            <IconButton aria-label="settings" onClick={()=>deleteUser(index)}>
              <DeleteIcon />
            </IconButton>
          }
          title={`${nombre} ${apellido}`}
          subheader={email}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
          <Link to={`users/user/${index}`}>Haga click aquí para ver mas detalles</Link>
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}

const useStyles = makeStyles({
  avatar: {
    height: "50px",
  },
  avatarContainer: {
    height: "50px",
    objectFit: "contain",
    width: "50px",
  },
  grid:{
      
  }
});
