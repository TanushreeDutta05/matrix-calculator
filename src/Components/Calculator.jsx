import React, { useState } from "react";
import { Container } from "@mui/material";
import MatrixInput from "../Components/MatrixInput";
import OperationButtons from "../Components/OperationButtons";
import MatrixResult from "../Components/MatrixResult";

const Calculator = () => {
  const [matrixA, setMatrixA] = useState([
    [0, 0],
    [0, 0],
  ]);
  const [matrixB, setMatrixB] = useState([
    [0, 0],
    [0, 0],
  ]);
  const [result, setResult] = useState(null);

  const handleMatrixChange = (e, i, j, setMatrix) => {
    const value = parseFloat(e.target.value) || 0;
    setMatrix((prevMatrix) => {
      const newMatrix = [...prevMatrix];
      newMatrix[i][j] = value;
      return newMatrix;
    });
  };

  const handleOperation = (operation) => {
    let operationResult = [];
    if (operation === "add") {
      operationResult = matrixA.map((row, i) =>
        row.map((val, j) => val + matrixB[i][j])
      );
    } else if (operation === "subtract") {
      operationResult = matrixA.map((row, i) =>
        row.map((val, j) => val - matrixB[i][j])
      );
    } else if (operation === "multiply") {
      operationResult = Array(matrixA.length)
        .fill(0)
        .map(() => Array(matrixB[0].length).fill(0));
      for (let i = 0; i < matrixA.length; i++) {
        for (let j = 0; j < matrixB[0].length; j++) {
          for (let k = 0; k < matrixB.length; k++) {
            operationResult[i][j] += matrixA[i][k] * matrixB[k][j];
          }
        }
      }
    }
    setResult(operationResult);
  };

  return (
    <Container>
      <MatrixInput
        title="Matrix A"
        matrix={matrixA}
        onMatrixChange={(e, i, j) => handleMatrixChange(e, i, j, setMatrixA)}
      />
      <MatrixInput
        title="Matrix B"
        matrix={matrixB}
        onMatrixChange={(e, i, j) => handleMatrixChange(e, i, j, setMatrixB)}
      />
      <OperationButtons onOperation={handleOperation} />
      {result && <MatrixResult result={result} />}
    </Container>
  );
};

export default Calculator;
