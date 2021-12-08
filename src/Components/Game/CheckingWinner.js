function CheckWinner(mat) {
  // console.log(mat[0][0] === mat[0][1] === mat[0][2])
  // checking first row
  if (mat[0][0] === mat[0][1] && mat[0][1] === mat[0][2]) {
    return mat[0][0];
  }
  // checking second row
  else if (mat[1][0] === mat[1][1] && mat[1][1] === mat[1][2]) {
    return mat[1][0];
  }
  // checking third row
  else if (mat[2][0] === mat[2][1] && mat[2][1] === mat[2][2]) {
    return mat[2][0];
  }
  // checking first column
  else if (mat[0][0] === mat[1][0] && mat[1][0] === mat[2][0]) {
    return mat[0][0];
  }
  // checking second column
  else if (mat[0][1] === mat[1][1] && mat[1][1] === mat[2][1]) {
    return mat[0][1];
  }
  // checking third column
  else if (mat[0][2] === mat[1][2] && mat[1][2] === mat[2][2]) {
    return mat[0][2];
  }

  //checking \ diagonal
  else if (mat[0][0] === mat[1][1] && mat[1][1] === mat[2][2]) {
    return mat[0][0];
  }

  //checking / diagonal
  else if (mat[0][2] === mat[1][1] && mat[1][1] === mat[2][0]) {
    return mat[0][2];
  }
}

export default CheckWinner;
