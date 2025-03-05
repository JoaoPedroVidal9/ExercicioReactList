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
        alignItems: "center",
      }}
    >
      <Typo>Páginas:</Typo>
      <Button component={Link} to="/events" sx={{ backgroundColor: "#964B00", borderColor:'#010101', borderWidth:'2px' }}>
        Lista de Eventos:
      </Button>
      <Button component={Link} to="/org" sx={{ backgroundColor: "#00008B", borderColor:'#010101', borderWidth:'2px' }}>
        Lista de Organizadores:
      </Button>
      <Button component={Link} to="/ingr" sx={{ backgroundColor: "#FFC222", borderColor:'#010101', borderWidth:'2px' }}>
        Lista de Ingressos:
      </Button>
    </Container>
  );
}
export default Home;
