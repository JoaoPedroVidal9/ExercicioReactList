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


function Org() {
  const [organizadores, setOrganizadores] = useState([]);

  async function getOrg() {
    await api.listOrg().then(
      (response) => {
        console.log(response.data.organizadores);
        setOrganizadores(response.data.organizadores);
      },
      (error) => {
        console.log(error.response.data.error);
      }
    );
  }

  const listOrg = organizadores.map((organizador) => {
    return (
      <TableRow key={organizador.id_organizador}>
        <TableCell align="center">{organizador.nome}</TableCell>
        <TableCell align="center">{organizador.email}</TableCell>
        <TableCell align="center">{organizador.telefone}</TableCell>
      </TableRow>
    );
  });

  useEffect(() => {
    getOrg();
  }, []);

  return (
    <div sx={{
      display:'flex',
      flexDirection:'column',
      justifyContent:'center'
      
    }}>
      <h3>Lista de Organizadores:</h3>
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
              <TableCell align="center">E-mail</TableCell>
              <TableCell align="center">Telefone</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{listOrg}</TableBody>
        </Table>
      </TableContainer>
      <Button component={Link} to='/'>Voltar</Button>
    </div>
  );
}

export default Org
