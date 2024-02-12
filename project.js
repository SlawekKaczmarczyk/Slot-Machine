const prompt = require("prompt-sync")();

const deposit = () => {
      while(true){
            const depositAmount = prompt("Enter a deposit amount: "); // returns String
            const numberDepositAmount = parseFloat(depositAmount);

            if (isNaN(numberDepositAmount) || numberDepositAmount <= 0){
                  console.log("Invalid deposit amount, try again.");
      
            } else {
                  return numberDepositAmount;
            }
      }    
};

const getNumberOfLines = () => {
      while(true){
            const lines = prompt("Enter number of lines to bet(1-3): "); // returns String
            const numberOfLines = parseFloat(lines);

            if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3){
                  console.log("Invalid number of lines, try again.");
      
            } else {
                  return numberOfLines;
            }
      }    
};

const getBet = (balance, lines) => {
      while(true){
            const bet = prompt("Enter the bet per line: "); // returns String
            const numberBet = parseFloat(bet);

            if (isNaN(numberBet) || numberBet <= 0 || numberBet > balance / lines) {
                  console.log("Invalid bet, try again.");
      
            } else {
                  return numberBet;
            }
      }   
};


let balance = deposit();
const numberOfLines = getNumberOfLines();
const bet = getBet(balance, numberOfLines);