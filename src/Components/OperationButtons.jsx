import React from "react";
import { Grid, Button } from "@mui/material";

const OperationButtons = ({ onOperation }) => {
  return (
    <Grid container spacing={2}>
      <Grid item>
        <Button
          variant="contained"
          color="primary"
          onClick={() => onOperation("add")}
        >
          Add
        </Button>
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => onOperation("subtract")}
        >
          Subtract
        </Button>
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          color="success"
          onClick={() => onOperation("multiply")}
        >
          Multiply
        </Button>
      </Grid>
    </Grid>
  );
};

export default OperationButtons;
