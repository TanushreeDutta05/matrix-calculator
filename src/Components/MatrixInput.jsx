import React from "react";
import { Grid, TextField, Typography } from "@mui/material";

const MatrixInput = ({ title, matrix, onMatrixChange }) => {
  return (
    <div>
      <Typography variant="h6">{title}</Typography>
      {matrix.map((row, i) => (
        <Grid container key={`${title}-row-${i}`} spacing={1}>
          {row.map((_, j) => (
            <Grid item xs={6} key={`${title}-cell-${i}-${j}`}>
              <TextField
                type="number"
                label={`${title}[${i + 1},${j + 1}]`}
                name={`${i}-${j}`}
                value={matrix[i][j]}
                onChange={(e) => onMatrixChange(e, i, j)}
              />
            </Grid>
          ))}
        </Grid>
      ))}
    </div>
  );
};

export default MatrixInput;
