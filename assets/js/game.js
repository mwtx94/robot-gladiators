// Game States
// "WIN" - Player robot has defeated all enemey-robots
//    * Fight all enemy-robots
//    * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less

// variable declarations for the player
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;
// this is how you log multiple values at once
console.log(playerName, playerHealth, playerAttack);
// variable declarations for the ai and the enemyNames array
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;
// start of fight function
var fight = function (enemyName) {
  // repeat and execute as long as the enemy-robot is alive
  while (enemyHealth > 0) {
    // place fight function code block here . . .

    // fight or skip prompt
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    // if player choses to fight, then fight, it can be lowercase or caps this is at the top so the rest of the function can take place if you choose this || is a or operator, it's telling the program to execute the code as long as atleast one of the condition checks results in true
    if (promptFight === "fight" || promptFight === "FIGHT") {
      // remove enemy's health by subtracting the amount set in the playerAttack variable
      enemyHealth = enemyHealth - playerAttack;
      console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
      );

      // check enemy's health, if it's 0 or less the enemy has died, if it's over 0 the enemy still has "" health left
      if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
      } else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
      }

      // remove player's health by subtracting the amount set in the enemyAttack variable
      playerHealth = playerHealth - enemyAttack;
      console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
      );

      // check player's health, if it's 0 or less the playerName has died, if it's over 0 the playerName still has "" left
      if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
      } else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
      }
      // if player choses to skip, then skip, it can be lowercase or caps this is at bottom because the rest of the function doesn't pertain to it
    } else if (promptFight === "skip" || promptFight === "SKIP") {
      // confirm player wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");
      // if yes (true), leave fight
      if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
        //subtract money from playerMoney for skipping
        playerMoney = playerMoney - 2;
      }
      // if no (false), ask question again by running fight() again
      else {
        fight();
      }
    }
    // closing for while loop
  }
};

// function call
for (var i = 0; i < enemyNames.length; i++) {
  var pickedEnemyName = enemyNames[i];
  enemyHealth = 50;
  fight(pickedEnemyName);
}