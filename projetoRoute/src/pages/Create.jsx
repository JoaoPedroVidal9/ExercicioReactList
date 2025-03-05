import * as React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typo from "@mui/material/Typography";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";

function Create() {
  return (
  <div>
    <Container component="main" maxWidth="xl">
    <Box
            component="div"
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar
              sx={{
                mt: 2,
                mb: 2,
                backgroundColor: "#964B00",
              }}
            >
              <AccountCircleOutlinedIcon />
            </Avatar>
            <Typo component="h1" variant="h5">
              Cadastre seu Evento:
            </Typo>
            <Box
              component="form"
              width="80%"
              sx={{
                marginTop: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <TextField
                sx={{
                  mt: 1,
                }}
                id="Nome"
                label="Nome"
                name="Nome"
                required
                fullWidth
              />
              <TextField
                sx={{
                  mt: 1,
                }}
                id="Descrição"
                label="Descrição"
                name="Descrição"
                required
                fullWidth
              />
              <TextField
                sx={{
                  mt: 1,
                }}
                id="Local"
                label="Local"
                name="Local"
                required
                fullWidth
              />
              <Typo component="p" sx={{
                alignSelf: "start"
              }}>Data de Nascimento:</Typo>
              <TextField
                sx={{
                  mt: 1,
                }}
                id="Data e Hora"
                name="Data e Hora"
                required
                fullWidth
                type="datetime-local"
              />
    
              
    
              <Button
                sx={{
                  mt: 2,
                  mb: 2,
                  backgroundColor: "#964B00",
                }}
                fullWidth
                type="submit"
                variant="contained"
              >
                Cadastrar
              </Button>
            </Box>
            <Button component={Link} to='/events'>Voltar</Button>
          </Box>
        </Container>
        </div>
        );
}
export default Create;
