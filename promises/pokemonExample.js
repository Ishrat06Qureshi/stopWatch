const pokeMonURL = 'https://pokeapi.co/api/v2/pokemon?limit=50';
const pokemonsURLS = [
	'https://pokeapi.co/api/v2/pokemon/bulbasaur',
	'https://pokeapi.co/api/v244/pokemon/raticate',
	'https://pokeapi.co/api/v2/pokemon/kakuna',
];
const getData = async (url) => {
	try {
		const response = await fetch(url);
		const jsonData = await response.json();
		return jsonData;
	} catch (err) {
		Promise.reject(new Error(`${url} is not a valid url`));
	}
};

const getPokemons = async () => {
	const allPokemons = await getData(pokeMonURL);
	return allPokemons;
};

const showPokemonsData = async () => {
	const pokemonData = await getPokemons();
	return pokemonData;
};
const getFisrtPokemon = async () => {
	try {
		const allPokemon = await getPokemons();
		const firstPokemon = await getData(
			allPokemon.results && allPokemon.results[0].url
				? allPokemon.results[0].url
				: ''
		);
		console.log('one pokemoms data', firstPokemon);
		return firstPokemon;
	} catch (err) {
		return new Error(err);
	}
};

const getMultiplePokemonsData = async () => {
	try {
		const allPokemons = pokemonsURLS.map((url) => getData(url));
		const data = await Promise.all(allPokemons);
		return data;
	} catch (err) {
		new Error(err);
	}
};
showPokemonsData();
getFisrtPokemon();
getMultiplePokemonsData()
	.then((results) => console.log('results', results))
	.catch((err) => console.log('err', err));



// const testData = async () => {
// 	try {
// 		const data = await fetch('https://pokeapi.co/api/v2/pokemon?limit=50');
// 		const response = await data.json();
// 		return response;
// 	} catch (err) {
// 		throw new Error('something went wrong');
// 	}
// };
// const testDataTwo = async () => {
// 	try {
// 		const data = await fetch('https://pokeapi.co/api/v24/pokemon?limit=50');
// 		const response = await data.json();
// 		return response;
// 	} catch (err) {
// 		throw new Error('something went wrong');
// 	}
// };
// const data = async () => {
// 	try {
// 		const allData = await Promise.allSettled([testData(), testDataTwo()]);
// 		console.log('allData', allData);
// 	} catch (err) {
// 		console.log('err', err);
// 	}
// };
// data();
