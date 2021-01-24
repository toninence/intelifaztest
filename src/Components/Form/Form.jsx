import React from "react";
import { useForm } from "react-hook-form";
import Grid from "@material-ui/core/Grid";

import {
  Button,
  makeStyles,
  TextField,
  Typography,
  withStyles,
} from "@material-ui/core";

import {
  Send as SendIcon,
  ErrorOutlineOutlined as ErrorIcon,
} from "@material-ui/icons/";
import Input from "./Input";
import ErrorMessage from "./ErrorMessage";

export default function Form({ onSubmit }) {
  const { register, handleSubmit, errors } = useForm();
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container>
              <Grid item xs={12} md={6}>
                <Input
                  label="Nombre"
                  name="nombre"
                  register={register({ required: true })}
                />
                {errors.nombre && (
                  <ErrorMessage msg="Este campo es obligatorio" />
                )}
              </Grid>
              <Grid item xs={12} md={6}>
                <Input
                  label="Apellido"
                  name="apellido"
                  register={register({ required: true })}
                />
                {errors.apellido && (
                  <ErrorMessage msg="Este campo es obligatorio" />
                )}
              </Grid>
              <Grid item xs={12} md={4}>
                <Input
                  label="Email"
                  name="email"
                  register={register({ required: true })}
                />
                {errors.email && (
                  <ErrorMessage msg="Este campo es obligatorio" />
                )}
              </Grid>
              <Grid item xs={12} md={4}>
                <Input
                  label="Direccion"
                  name="direccion"
                  register={register({ required: true })}
                />
                {errors.direccion && (
                  <ErrorMessage msg="Este campo es obligatorio" />
                )}
              </Grid>              
              <Grid item xs={12} md={4}>
                <Input
                  label="Localidad"
                  name="localidad"
                  register={register({ required: true })}
                />
                {errors.localidad && (
                  <ErrorMessage msg="Este campo es obligatorio" />
                )}
              </Grid>
              <Grid item xs={12} md={4}>
                <Input
                  label="Nacionalidad"
                  name="nacionalidad"
                  register={register({ required: true })}
                />
                {errors.nacionalidad && (
                  <ErrorMessage msg="Este campo es obligatorio" />
                )}
              </Grid>
              <Grid item xs={12} md={4}>
                <Input
                  label="Dni"
                  name="dni"
                  register={register({ required: true })}
                />
                {errors.dni && (
                  <ErrorMessage msg="Este campo es obligatorio" />
                )}
              </Grid>
              <Grid item xs={12} md={4}>
                <Input
                  label="Avatar (ingrese una url)"
                  name="avatar"
                  register={register({ required: true })}
                />
                {errors.avatar && (
                  <ErrorMessage msg="Este campo es obligatorio" />
                )}
              </Grid>              
            </Grid>
            <Grid container>
              <Button
                type="submit"
                variant="outlined"
                color="primary"
                endIcon={<SendIcon>send</SendIcon>}
              >
                <Typography variant="button">Enviar</Typography>
              </Button>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </div>
  );
}

const CustomTextField = withStyles({
  root: {
    width: "90%",
    marginBottom: "10px",
    marginTop: "10px",
  },
})(TextField);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  errorMsg: {
    display: "flex",
    alignItems: "center",
    marginBottom: "10px",
  },
}));
