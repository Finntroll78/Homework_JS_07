let str = 'урок-3-был слишком легким';

let newStr = str[0].toUpperCase() + str.slice(1);
console.log(newStr.replace(/-/g, ' '));

newStr1 = (newStr.split(' ').splice(2,1).join(newStr).split('').splice(4,2,'о','о').join(''));

console.log(newStr1);

/////////////////////////////////////////

let arr = [20, 33, 1, 'Человек', 2, 3];
arr.splice(3,1);

let newArr = [],
count = 0;

for (let i = 0; i < arr.length; i++) {
	(newArr.push(arr[i]**3));
}

for (let i = 0; i < newArr.length; i++) {
	count += newArr[i];
}

console.log(Math.sqrt(count))

/////////////////////////////////////////

function fu(a) {
	if (typeof a !== 'string') {
		console.log('Введена не строка')
	} else {
		console.log(a.trim());
	}
}

fu(' vffvf ')