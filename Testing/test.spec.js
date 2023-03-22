// Utilisation d'un objet : On peut représenter le jeu en utilisant un objet où les 
// propriétés sont les coups possibles et les valeurs sont les coups qui battent cette propriété.
  // Définir une fonction qui prend deux entrées(player1 and player2)
    //  et renvoie le gagnant d'un jeu de pierre-papier-ciseaux entre eux
    function playRound(player1, player2) {
      if (player1 === player2) {
        return "tie";
      } else if ((player1 === "rock" && player2 === "scissors") ||
                 (player1 === "paper" && player2 === "rock") ||
                 (player1 === "scissors" && player2 === "paper")) {
        return "player1";
      } else {
        return "player2";
      }
    }
  
const gameRules = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper"
  };
  
  function playRound(player1, player2) {
    if (player1 === player2) {
      return "tie";
    } else if (gameRules[player1] === player2) {
      return "player1";
    } else {
      return "player2";
    }
  }

// Utilisation d'un tableau : On peut représenter le jeu en utilisant un tableau où
// chaque élément correspond à un coup et la position de l'élément dans le tableau représente le coup qui peut être battu par cet élément.

  const gameMoves = ["rock", "paper", "scissors"];

function playRound(player1, player2) {
  const p1Index = gameMoves.indexOf(player1);
  const p2Index = gameMoves.indexOf(player2);
  const difference = p1Index - p2Index;
  if (difference === 0) {
    return "tie";
  } else if (difference === -1 || difference === 2) {
    return "player1";
  } else {
    return "player2";
  }
}




const gameMoves = ["rock", "paper", "scissors"];

function playRound(player1, player2) {
  const p1Index = gameMoves.indexOf(player1);
  const p2Index = gameMoves.indexOf(player2);
  const difference = p1Index - p2Index;
  if (difference === 0) {
    return "tie";
  } else if (difference === -1 || difference === 2) {
    return "player1";
  } else {
    return "player2";
  }
}