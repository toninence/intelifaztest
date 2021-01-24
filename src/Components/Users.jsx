import React, { useEffect } from "react";
import { Link, Route } from "react-router-dom";
import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";

import User from "./User";
import UserCard from "./UserCard";
export default function Users({ users, deleteUser }) {
  return (
    <CardContent>
      <Grid container spacing={2}>
        {users.map((user, i) => (
          <UserCard user={user} index={i} deleteUser={deleteUser} />
        ))}
      </Grid>
    </CardContent>
  );
}
