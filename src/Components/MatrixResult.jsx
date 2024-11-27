import React from "react";
import { Grid, TextField, Typography } from "@mui/material";

const MatrixResult = ({ result }) => {
  return (
    <div>
      <Typography variant="h6">Result</Typography>
      {result.map((row, i) => (
        <Grid container key={`result-row-${i}`} spacing={1}>
          {row.map((value, j) => (
            <Grid item xs={6} key={`result-cell-${i}-${j}`}>
              <TextField value={value} InputProps={{ readOnly: true }} />
            </Grid>
          ))}
        </Grid>
      ))}
    </div>
  );
};

export default MatrixResult;
