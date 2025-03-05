import { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Paper from "@mui/material/Paper";
import api from '../axios/axios'
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";


function Events() {
  const [events, setEvents] = useState([]);

  async function getEvents() {
    await api.listEvento().then(
      (response) => {
        console.log(response.data.eventos);
        setEvents(response.data.eventos);
      },
      (error) => {
        console.log(error.response.data.error);
      }
    );
  }

  const listEvents = events.map((event) => {
    return (
      <TableRow key={event.id_evento}>
        <TableCell align="center">{event.nome}</TableCell>
        <TableCell align="center">{event.descricao}</TableCell>
        <TableCell align="center">{event.data_hora}</TableCell>
        <TableCell align="center">{event.local}</TableCell>
      </TableRow>
    );
  });

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <div sx={{
      display:'flex',
      flexDirection:'column',
      justifyContent:'center',
      minWidth:'100vh'
    }}>
      <h3>Lista de Eventos:</h3>
      <TableContainer component={Paper} style={{ margin: "2px" }}>
        <Table size="small">
          <TableHead
            style={{
              backgroundColor: "#964B00",
              borderStyle: "solid",
              borderColor: "#020202",
            }}
          >
            <TableRow>
              <TableCell align="center">Nome</TableCell>
              <TableCell align="center">Descrição</TableCell>
              <TableCell align="center">Data e Hora</TableCell>
              <TableCell align="center">Local</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{listEvents}</TableBody>
        </Table>
      </TableContainer>
      <div sx={{
        display:'flex',
        justifyContent:'space-evenly',
        width: '100%'
      }}>
      <Button component={Link} to='/criar'>Criar um Evento</Button>
      <Button component={Link} to='/'>Voltar</Button>
      </div>
    </div>
  );
}

export default Events;
