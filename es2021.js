// // let value = false;

// // const firstPromise = new Promise((resolve, reject) => {
// // 	if (value) {
// // 		const data = {
// // 			fruits: ['apple', 'mango', 'banana'],
// // 		};
// // 		resolve(data);
// // 	} else {
// // 		reject('rejected data');
// // 	}
// // });

// // firstPromise
// // 	.then((data) => console.log('data', data))
// // 	.catch((err) => console.log('err', err));

// const promise = (id) => {
// 	return new Promise((resolve, reject) => {
// 		if (typeof id !== Number) {
// 			reject('invalid type of id');
// 		}
// 		resolve({
// 			compName: 'ishrat',
// 			number: '12345',
// 		});
// 	});
// };

// try {
// 	promise('a')
// 		.then((data) => console.log('data', data))
// 		.catch((err) => console.log('caugth by .catch', err));
// } catch (err) {
// 	console.log('caught by try/catch', err);
// }
// //

//promise chaining

// let p = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		resolve(10);
// 	}, 3 * 1000);
// });

// p.then((result) => result * 2).then((resultTwo) => console.log(resultTwo));

//promise Chaning example:
const getUserID = (id) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve({
				id: 100,
				userName: 'ishrat',
			});
			// reject(new Error('unable to get the data from database'));
		}, 3 * 1000);
	});
};
const getServicesById = async (user) => {
	console.log('user information ', user);

	// return new Promise((resolve, reject) => {
	// 	setTimeout(() => {
	// 		resolve(['Email', 'VPN', 'CDN']);
	// 	}, 3 * 1000);
	// });
	const data = await new Promise((resolve) =>
		setTimeout(() => {
			resolve(['Email', 'VPN', 'CDN']);
		}, 1000)
	);

	return data;
};

const getCostByServices = async (services) => {
	console.log('used services ', services);
	try {
		const cost = await new Promise((resolve, reject) =>
			setTimeout(() => {
				reject(new Error('for no good reason'));
			}, 3000)
		);
		return cost;
	} catch (err) {
		console.log('err by cost', err);
	}

	// return cost;
};

const showServices = async () => {
	try {
		const user = await getUserID(100);
		const services = await getServicesById(user);
		const servicesCost = await getCostByServices(services);
		return servicesCost;
	} catch (err) {
		console.log('err', err);
	}
};
showServices().then((cost) => console.log('cost', cost));
