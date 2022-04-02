const fetchOne = async (url) => {
	try {
		const response = await fetch(url);
		const json = await response.json();
		return json;
	} catch (err) {
		return new Error(err);
	}
};

const allPromises = async () => {
	const urls = [
		'https://jsonplaceholder.typicode.com/posts/1',
		'https://jsonplaceholder.typicode.com/posts/2',
		// 'https://jsonplaceholder.typicode.com/posts/3',
		// 'https://jsonplaceholder.typicode.com/posts/4',
		// 'https://jsonplaceholder.typicode.com/posts/5',
		// 'https://jsonplaceholder.typicode.com/posts/6',
		// 'https://jsonplaceholder.typicode.com/posts/7',
		// 'https://jsonplaceholder.typicode.com/posts/8',
	];
	const promises = urls.map((url) => fetchOne(url));
	const allPromisesData = await Promise.all(promises);
	return allPromisesData;
};
function setup() {
	noCanvas();
	allPromises()
		.then(
			(result) => {
				console.log('result', result);
			}
			// ([resultOne, resultTwo]) => {
			// console.log('resultOne', resultOne);
			// console.log('resultTwo', resultTwo);
			// }
		)
		.catch((err) => console.error('errn of the promise', err));
}
