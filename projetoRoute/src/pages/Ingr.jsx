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


function Ingresso() {
  const [ingressos, setIngressos] = useState([]);

  async function getIngr() {
    await api.listIngr().then(
      (response) => {
        console.log(response.data.ingressos);
        setIngressos(response.data.ingressos);
      },
      (error) => {
        console.log(error.response.data.error);
      }
    );
  }

  const listIngr = ingressos.map((ingresso) => {
    return (
      <TableRow key={ingresso.id_ingresso}>
        <TableCell align="center">{ingresso.preco}</TableCell>
        <TableCell align="center">{ingresso.tipo}</TableCell>
        <TableCell align="center">{ingresso.fk_id_evento}</TableCell>
      </TableRow>
    );
  });

  useEffect(() => {
    getIngr();
  }, []);

  return (
    <div sx={{
      display:'flex',
      flexDirection:'column',
      justifyContent:'center'
      
    }}>
      <h3>Lista de Ingressos:</h3>
      <TableContainer component={Paper} style={{ margin: "2px" }}>
        <Table size="small">
          <TableHead
            style={{
              backgroundColor: "#FFC222",
              borderStyle: "solid",
              borderColor: "#020202",
            }}
          >
            <TableRow>
              <TableCell align="center">Preço</TableCell>
              <TableCell align="center">Tipo</TableCell>
              <TableCell align="center">Id do Evento</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{listIngr}</TableBody>
        </Table>
      </TableContainer>
      <Button component={Link} to='/'>Voltar</Button>
    </div>
  );
}

export default Ingresso
