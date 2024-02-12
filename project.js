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

const depositAmount = deposit();
console.log(depositAmount)