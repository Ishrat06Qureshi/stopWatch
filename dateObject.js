// let currentDate = new Date(2018, 0, 14, 10, 5, 33, 0);
// let newDate = new Date('08-8-2021');
// // console.log('newDate toString', newDate.toLocaleString());
// // console.log('newDate getFullYear', newDate.getFullYear());
// // console.log('newDate month', newDate.getMonth() + 1);
// // console.log('newDate getDay', newDate.getDay());

// newDate.setFullYear(2023);
// newDate.setMonth(4);
// newDate.setDate(21);
// console.log('updated Date', newDate.toLocaleDateString());

//w3Resoucres

// const isDate = (inputDate) => {
// 	const isDate = new Date(inputDate);
// 	console.log('isDate', isDate);
// 	return isDate == 'Invalid Date' ? false : true;
// };
// console.log(isDate('22-02-2021'));

// date- formatter

// const dateFormatter = (inputDate, delimitter) => {
// 	const dateObj = new Date(inputDate);
// 	if (dateObj == 'Invalid Date') {
// 		return `${inputDate} is not a correct date to be formatted`;
// 	} else {
// 		let currentYear, currentMonth, currentDate;
// 		currentYear = new Date(inputDate).getFullYear();
// 		currentMonth = new Date(inputDate).getMonth() + 1;
// 		currentDate = new Date(inputDate).getDate();
// 		return `${currentMonth}${delimitter}${currentYear}${delimitter}${currentDate}`;
// 	}
// };

// console.log('dateFormatter',dateFormatter("11-13-2014","/"));

//get number of days in a month
// const getNumberOfDays = (month = 0, year = 2021) => {
// 	const getDate = new Date(year, month , 0);
//     console.log('getDate',getDate)
// 	return getDate;
// };
// console.log('getNumberOfDays', getNumberOfDays(9, 2012));

//get A month Name
// const getMonthName = (inputDate) => {
// 	const monthsNames = {
// 		1: 'January',
// 		2: 'Feburary',
// 		3: 'March',
// 		4: 'April',
// 		5: 'May',
// 		6: 'June',
// 		7: 'July',
// 		8: 'August',
// 		9: 'September',
// 		10: 'October',
// 		11: 'November',
// 		12: 'December',
// 	};
// 	const month = new Date(inputDate).getMonth() + 1;
// 	return monthsNames[month];
// };
// console.log('getMonthName', getMonthName('3/13/2014'));

//dates difference

// const datesDifference = (dateOne , dateTwo ) => {
//     return new Date(dateOne) - new Date(dateTwo)
// }
// console.log('datesDifference',datesDifference('04/02/2014', '11/04/2014'))

//apply with maths ---
// const max_date = (datesArray) => {
//     const dateObjArray = datesArray.map((date) => new Date(date))
// 	return new Date(Math.max.apply(Math,dateObjArray));
// };
// console.log(max_date(['2015/02/01', '2015/02/02', '2015/01/03']));

//Array.apply() with Math functions

// const min_Date = (dateArray) => {
// 	const dateObjArray = dateArray.map((date) => new Date(date));
   
// 	return new Date(Math.min.apply(null, dateObjArray)).toLocaleDateString();
// };

// console.log('min_Date',min_Date(['2015/02/01', '2015/02/02', '2015/01/03']))

// var reg = /^\d+$/;
// console.log(reg.test('09898909'))

let activities = [
    {
        "activityCode": "4791013.2",
        "activityNameEng": null,
        "activityNameArb": null
    },
    {
        "activityCode": "4610010",
        "activityNameEng": "Commercial Brokers ",
        "activityNameArb": "وسيط تجاري "
    }
]
console.log(activities.map((element) => element.activityNameEng ? element.activityNameEng : '' ))