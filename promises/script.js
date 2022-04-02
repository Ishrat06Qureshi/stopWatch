const wordInApi =
	'https://api.wordnik.com/v4/words.json/randomWord?&minLength=5&maxLength=-1&api_key=48dd829661f515d5abc0d03197a00582e888cc7da2484d5c7';
const giphyApi =
	'https://api.giphy.com/v1/gifs/search?rating=PG&api_key=dc6zaTOxFJmzC&q=';

// function setup() {
// 	noCanvas();
// 	fetch(wordInApi)
// 		.then((response) => response.json())
// 		.then((json) => {
// createP(json.word);
// 			return fetch(giphyApi + json.word);
// 		})
// 		.then((img) => img.json())
// 		.then((imgJson) => {
// 			console.log('imgJson', imgJson);
// 			createImg(imgJson.data[0].images['fixed_height'].url);
// 		})
// 		.catch((err) => console.log('err', err));
// }
// async function wordGiphy() {
// 	try {
// 		const words = await fetch(wordInApi);
// 		const wordJson = await words.json();
// 		const giphy = await fetch(giphyApi + wordJson.word);
// 		const giphyJson = await giphy.json();
// 		return {
// 			word: wordJson.word ?? 'no word found',
// 			imgUrl: giphyJson.data[0].images['fixed_height'].url,
// 		};
// 	} catch (err) {
// 		throw new Error(err);
// 	}
// }
// function setup() {
// 	noCanvas();
// 	wordGiphy()
// 		.then((result) => {
// 			createP(result.word);
// 			createImg(result.imgUrl);
// 		})
// 		.catch((err) => console.error('err',err));
// }

// const delay = (time) => {
// 	console.log('time', time);
// 	return new Promise((resolve, reject) => {
// 		if (typeof time === Number) {
// 			setTimeout(resolve, time);
// 		}
// 		reject(new Error('please provide a valid time in miliseconds'));
// 	});
// };
// for promise.all with custom promises

// const p1 = async () => {
// 	const data = await new Promise((resolve, reject) =>
// 		setTimeout(() => {
// 			resolve(20);
// 		}, 2000)
// 	);
// 	return data;
// 	// return await Promise.resolve(20);
// };

// const p2 = async () => {
// 	const data = await new Promise((resolve, reject) =>
// 		setTimeout(() => {
// 			// reject(new Error('rejected promise'));
// 			resolve(2000)
// 		}, 5000)
// 	);
// 	return data;
// 	// return await Promise.resolve(20);
// };

// const allPromises = async () => {
// 	const allPromisesData = await Promise.all([p1(), p2()]);
// 	return allPromisesData;
// };


