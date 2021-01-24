import { useEffect, useState } from "react";
// Componentes

import Routes from "./Components/Routes/Routes";
// Estilos
import { Container, makeStyles } from "@material-ui/core";

// Router
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const classes = useStyles();
  const [users, setUsers] = useState([
    {nombre: 'Juan', apellido: 'Perez', email: 'juanperez@gmail.com', direccion: 'Calle Falsa 123', localidad: 'Springfield', nacionalidad: 'Estados Unidos', dni: '12345676', avatar:'https://i.pinimg.com/474x/83/a9/a1/83a9a144ab03763667b8d8aa381bb441.jpg'},
    {nombre: 'Juana', apellido: 'Perez', email: 'juanaperez@gmail.com', direccion: 'Calle Falsa 123', localidad: 'Springfield', nacionalidad: 'Estados Unidos', dni: '12345677', avatar:'https://img.unocero.com/2020/06/como-crear-avatar-en-facebook.jpg'},
    {nombre: 'Jorgelina', apellido: 'Perez', email: 'jorgelinaperez@gmail.com', direccion: 'Calle Falsa 123', localidad: 'Springfield', nacionalidad: 'Estados Unidos', dni: '12345678', avatar:'https://i.pinimg.com/originals/b0/88/e5/b088e5db6b560a33fc20e666a46263b3.jpg'},
    {nombre: 'jorge', apellido: 'Perez', email: 'jorgeperez@gmail.com', direccion: 'Calle Falsa 123', localidad: 'Springfield', nacionalidad: 'Estados Unidos', dni: '12345679', avatar:'https://sm.ign.com/t/ign_latam/screenshot/default/dnl_qxar.1280.jpg'},
  ]);

  const onSubmit = (data, e) => {
    setUsers([...users, data]);
    e.target.reset(); // reset after form submit
  };

  const deleteUser = (index) => {
    console.log('delete', index);
    setUsers(users.filter((user, i) => i !== index));
  };

  useEffect(() => {
    console.log(users);
  }, []);
  return (
    <Container maxWidth="lg">
      <Router>
        <Routes onSubmit={onSubmit} users={users} deleteUser={deleteUser} />
      </Router>
    </Container>
  );
}
const useStyles = makeStyles((theme) => ({
  toolbar: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  cardRoot: {
    padding: "10px",
    marginTop: "25px",
  },
  cardHeader: {
    display: "flex",
    justifyContent: "center",
  },
}));

export default App;
