const fakeData = require('faker');

console.log("=========================")
console.log("Welcome to My shop")
console.log("=========================")

for(var i = 0; i < 10; i++){
	let randomProductName = fakeData.commerce.productName()
	let randomPrice = fakeData.commerce.price()
	console.log(randomProductName + '- $' + randomPrice)
}