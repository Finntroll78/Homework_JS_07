let str = 'урок-3-был слишком легким';

let newStr = str[0].toUpperCase() + str.slice(1).replace(/-/g, ' ');
console.log(newStr);
let newStr1 = newStr.split(' ').splice(4,1).join().split('');
newStr1.pop();
newStr1.pop();
newStr1.push('о','о');
let newStr2 = newStr1.join('');
console.log(newStr2)


/////////////////////////////////////////

/*let arr = [20, 33, 1, 'Человек', 2, 3];
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

fu(' vffvf ')*/