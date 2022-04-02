// const extensionFinder = (fileName) => {
// const lastIndex = fileName.lastIndexOf(".");
// const extension = fileName.slice(lastIndex+1);
// return extension;
// }

// console.log(extensionFinder("www.google.com_search_q=not+equal+in+js&rlz=1C5CHFA_enPK979PK979&oq=not+equal+in+js+&aqs=chrome..69i57j0i22i30l5.4729j0j7&sourceid=chrome&ie=UTF-8&safe=active&ssui=on.png"));

// const stringExtractor = ( text ) => {
//     console.log('length',text.length);
//   return text.length > 3 ? text.slice(0,3) + text.slice(text.length-3): text;
// }

// console.log(stringExtractor("clin"));

// const halfExtractor = ( text ) => text.slice(0,4.5)
// console.log(halfExtractor('indeiii'));

// const concatenator = (textName1 ,  textName2) => {
//  return `${textName1.slice(1)} ${textName2.slice(1)}`
// };
// console.log(concatenator("ishrat","quteshi"));

// const findNearestTo100 = ( numberOne , numberTwo) => {
//     return 100 - numberOne > 100 - numberTwo ?  numberTwo : numberOne;
// }
// console.log(findNearestTo100(20,150));

// const checkType = (toCheckType) => {
//     return typeof(toCheckType) === "string" ? true : false;
// }

// const stringToArray = ( string ) => string.split(" ");
// console.log(stringToArray("Robin Singh"))

// const truncate = ( text , number ) => text.slice(0,number);
// console.log(truncate("Robin Singh",4));

// const abbreviationCreator = ( string ) => {
//     let stringArray  =  string.split(" ");
//     let lastElement = stringArray[stringArray.length-1];
//     let abbreviation = stringArray.filter((  element ) => element != lastElement ).join(" ");
//     return `${abbreviation} ${lastElement.charAt(0)} .`

// };

// console.log(abbreviationCreator("Robin Singh Malhotra"));

// const protectEmail = ( email) => {
//     let emailArray = email.split("@");
//     return `${emailArray[0].slice(0,5)}......@${emailArray[1]}`
// }
// console.log("protectEmail",protectEmail("r23@example.com"));

// const parmaterize = ( text ) => text.toLowerCase().split(" ").join("-");
// console.log("parmaterize",parmaterize("Robin Singh from USA"));

// const capitalizeWord = ( sentence ) => {
//  let splittedText = sentence.split(" ");
//  let capitalizeSentence = splittedText.map((text) => {
//      return `${text.charAt(0).toUpperCase()}${text.slice(1)}`
//  })
//  return capitalizeSentence.join(" ");
// }

// console.log(capitalizeWord('js string exercises'));

// const swap_String = (testString) => {
// 	console.log(testString);
// 	let stringArray = [];
// 	for (i = 0; i < testString.length; i++) {
// 		let swapString =
// 			testString.charAt(i) === testString.charAt(i).toUpperCase()
// 				? testString.charAt(i).toLocaleLowerCase()
// 				: testString.charAt(i).toUpperCase();
// 		stringArray.push(swapString);
// 	}
// 	return stringArray.join("");
// };

// console.log('testString', swap_String('AaBbc'));

//  function swapcase(str) {
//     return str.replace(/([a-z]+)/g, function(match, chr) {
//         console.log('match',match);
//         console.log('chr',chr);
//         return chr ? match.toUpperCase() : match.toLowerCase();
//     });
// }
// console.log(swapcase('AaBbc'));
// let testString = "javascript"
// const regexString = testString.replace("ava","-");
// console.log('regexString',regexString)

// function replacer(match, p1, p2, p3, offset, string) {
//     // p1 is nondigits, p2 digits, and p3 non-alphanumerics
//     console.log('p1',p1);
//     console.log('p2',p2);
//     console.log('p3',p3);
//     return [p1, p2, p3].join(' - ');
//   }
//   let newString = 'abc12345#$*%'.replace(/([^\d]*)(\d*)([^\w]*)/, replacer);
//   console.log(newString);  // abc - 12345 - #$*%





