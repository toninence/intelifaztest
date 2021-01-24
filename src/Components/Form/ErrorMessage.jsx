import React from 'react'

import { makeStyles, Typography } from '@material-ui/core'; 
import { ErrorOutlineOutlined as ErrorIcon } from "@material-ui/icons/";


export default function ErrorMessage({msg}) {
    const classes = useStyles();
    return (
        <Typography
          className={classes.errorMsg}
          variant="caption"
          color="secondary"
        >
          {" "}
          <ErrorIcon fontSize="small" /> {msg}
        </Typography>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    errorMsg: {
      display: "flex",
      alignItems: "center",
      marginBottom: '10px'
    },
  }));
