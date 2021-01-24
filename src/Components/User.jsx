import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import {
  DeleteOutlineOutlined as DeleteIcon,
  MoreVert as MoreVertIcon,
} from "@material-ui/icons/";

export default function User({ users }) {
  // obtengo el id de la url para buscarlo en el state
  let { userId } = useParams();
  userId = parseInt(userId);

  const user = users.filter((user, index) => index === userId);

  const { nombre, apellido, direccion, avatar, email } = user[0];
  const titulos = ['nombre', 'apellido', 'avatar']
  const keys = Object.keys(user[0]);
  const classes = useStyles();
  useEffect(() => {
    // console.log(Object.keys(user[0]))
  });
  return (
    <div>
      <Card className={classes.root}>
        <CardHeader className={classes.mayus} title={`${nombre} ${apellido}`} />
        <CardMedia className={classes.media} image={avatar} title={nombre} />
        <CardContent>
          {keys.map((key, i) => {
              if(!titulos.includes(key))
              {
                return <Typography key={i} variant="body2" className={classes.mayus}>
                  {key}: {user[0][key]}
                </Typography>
              }
            })}
        </CardContent>
        <CardActions disableSpacing></CardActions>
      </Card>
    </div>
  );
}

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: '0 auto'
  },
  avatar: {},
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  mayus: {
    textTransform: 'capitalize',
  }
});
