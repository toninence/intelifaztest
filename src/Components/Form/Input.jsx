import React from "react";

import { makeStyles, TextField, Typography, withStyles } from "@material-ui/core";
import { ErrorOutlineOutlined as ErrorIcon } from "@material-ui/icons/";

export default function Input({name, label, register, errors}) {
  return (
    <React.Fragment>
      <CustomTextField
        name={name}
        inputRef={register}
        id={name}
        label={label}
      />      
    </React.Fragment>
  );
}

const CustomTextField = withStyles({
  root: {
    width: "90%",
    marginBottom: "10px",
    marginTop: "10px",
  },
})(TextField);


