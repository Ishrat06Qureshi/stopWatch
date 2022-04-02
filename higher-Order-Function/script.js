const app = () => {
	const add = (num1, num2) => num1 + num2;
	const subtract = (num1, num2) => Math.abs(num1 - num2);

	const calculator = (num1, num2, operator) => {
		return operator(num1, num2);
	};
	const result = calculator(2, 3, subtract);
	console.log('result', result);
};
app();
