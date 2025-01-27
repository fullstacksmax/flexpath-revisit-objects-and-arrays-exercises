/*
	Exercise 9: Advanced Use of Array.reduce

	Problem:

	Given an array of transactions:
*/

const transactions = [
  { type: "deposit", amount: 100 },
  { type: "withdrawal", amount: 50 },
  { type: "deposit", amount: 200 },
  { type: "withdrawal", amount: 80 },
];
const adjusted = []
/*
	Use reduce to calculate the final balance, assuming the 
	starting balance is 0. 
	
	Also, categorize the transactions into deposits and withdrawals.
*/
/* for(let i = 0; i <= transactions.length -1; i++) {
	console.log(transactions[i].type)
	if(transactions[i].type == "withdrawal") {
		adjusted.push(transactions[i].amount *= -1)
		
	}
	else {
		adjusted.push(transactions[i].amount)
	}
}

console.log(adjusted)
const initialValue = 0 */

const result = transactions.reduce((acc, transaction) => {
	if(transaction.type === "withdrawal") {
		acc.balance -= transaction.amount;
		acc.withdrawal.push(transaction);
	}
	if(transaction.type === "deposit") {
		acc.balance += transaction.amount;
		acc.deposit.push(transaction);
	}
	return acc
},
{balance: 0 , withdrawal: [], deposit: []}
);


/* const sumWithInitial = adjusted.reduce(
	(accumulator, currentvalue) => {
	accumulator + currentvalue + initialValue}
);
 */
console.log("balance: ", result.balance)
console.log("total withdrawals: ", result.withdrawal)
console.log("total deposits: ", result.deposit)


console.log(result)