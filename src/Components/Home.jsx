import React from "react";
// Componentes
import Form from "./Form/Form";
// Estilos
import {
  Card,
  CardContent,
  makeStyles,
  Typography,
} from "@material-ui/core";

export default function Home({ onSubmit }) {
    const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" align="center">
          Registro de Usuarios
        </Typography>
        <Form onSubmit={onSubmit} />
      </CardContent>
    </Card>
  );
}

const useStyles = makeStyles((theme) => ({
    card: {
      width: "100%",
      marginTop: '20px',
    },
  }));
