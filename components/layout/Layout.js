import { Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import Meta from "../home/Meta";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <Box sx={{ position: "relative", zIndex: "0" }}>
      <Meta />
      <Header />
      <Container
        maxWidth="xl"
        disableGutters
        sx={{
          position: "relative",
        }}
      >
        {children}
      </Container>
      <Footer />
    </Box>
  );
};

export default Layout;
