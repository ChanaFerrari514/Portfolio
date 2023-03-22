
describe("Rock Paper Scissors Game", function() {

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
  
    // Définir les cas de test
    it("should return tie if both players play the same move", function() {
      expect(playRound("rock", "rock")).toEqual("tie");
      expect(playRound("paper", "paper")).toEqual("tie");
      expect(playRound("scissors", "scissors")).toEqual("tie");
    });
  
    it("should return player1 if player1 wins the game", function() {
      expect(playRound("rock", "scissors")).toEqual("player1");
      expect(playRound("paper", "rock")).toEqual("player1");
      expect(playRound("scissors", "paper")).toEqual("player1");
    });
  
    it("should return player2 if player2 wins the game", function() {
      expect(playRound("rock", "paper")).toEqual("player2");
      expect(playRound("paper", "scissors")).toEqual("player2");
      expect(playRound("scissors", "rock")).toEqual("player2");
    });
  });

//Cette suite de tests définit une fonction appelée playRound qui prend deux entrées (player1 et player2) 
//et renvoie le gagnant d'un jeu de pierre-papier-ciseaux entre eux. 
//d'un jeu de pierre-papier-ciseaux entre eux. La fonction renvoie "tie" si les deux joueurs jouent le même coup, 
//"player1" si player1 //gagne la partie, et "player2" si player2 gagne la partie. 
//gagne la partie, et "player2" si player2 gagne la partie.

//La suite de tests comprend trois cas de test qui testent la fonction playRound. Le premier cas de test vérifie que la fonction 
//renvoie "tie" si les deux joueurs jouent le même coup. Le deuxième cas de test vérifie que la fonction renvoie "player1"
// si le joueur 1 gagne la partie. Le troisième scénario vérifie que la fonction renvoie "player2" si le joueur 2 gagne la partie.

//Pour exécuter cette suite de tests, vous devez inclure la fonction playRound dans votre fichier script.js et créer un lien vers la bibliothèque Jasmine dans votre fichier index.html.
// index.html, comme décrit dans ma réponse précédente. Ensuite, lorsque vous ouvrez votre fichier index.html dans un navigateur web, Jasmine va
// Jasmine exécutera automatiquement les tests et affichera les résultats sur la page.