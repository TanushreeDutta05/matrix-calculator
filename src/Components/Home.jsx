import React from "react";
import { Container, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Welcome to the Matrix Calculator
      </Typography>
      <Button
        variant="contained"
        color="primary"
        component={Link}
        to="/calculator"
      >
        Go to Calculator
      </Button>
    </Container>
  );
};

export default Home;
