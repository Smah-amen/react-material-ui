import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

export default function Navbar() {
  return (
    <AppBar position="fixed" sx={{ backgroundColor: "#fff", color: "#000" }}>
      <Container maxWidth="md">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" component="div" sx={{ color: "#000", marginRight: 4, fontWeight: "bold" }}>
            Feliciano
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Button color="inherit" sx={{ fontWeight: "bold", color: "#000" }}>
              Home
            </Button>
            <Button color="inherit" sx={{ fontWeight: "bold", color: "#000" }}>
              About
            </Button>
            <Button color="inherit" sx={{ fontWeight: "bold", color: "#000" }}>
              Menu
            </Button>
            <Button color="inherit" sx={{ fontWeight: "bold", color: "#000" }}>
              Stories
            </Button>
            <Button color="inherit" sx={{ fontWeight: "bold", color: "#000" }}>
              Contact
            </Button>
            <Button
              sx={{
                backgroundColor: "#CBA150",
                color: "#fff",
                ml: 2,
                fontWeight: "bold",
              }}
              variant="contained"
            >
              Book a table
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

