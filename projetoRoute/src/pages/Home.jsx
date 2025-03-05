import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
import Typo from "@mui/material/Typography";

function Home() {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent:'space-evenly',
        alignItems: "center",
        minHeight: '100vh'
      }}
    >
      <Typo>Páginas:</Typo>
      <Button component={Link} to="/events" sx={{ color:'#010101', backgroundColor: "#964B00", border: '2px solid #010101'}}>
        Lista de Eventos:
      </Button>
      <Button component={Link} to="/org" sx={{ color:'#010101', backgroundColor: "#0000DD", border: '2px solid #010101'}}>
        Lista de Organizadores:
      </Button>
      <Button component={Link} to="/ingr" sx={{ color:'#010101', backgroundColor: "#FFC222", border: '2px solid #010101'}}>
        Lista de Ingressos:
      </Button>
    </Container>
  );
}
export default Home;
