let str = 'урок-3-был слишком легким';

let newStr = str[0].toUpperCase() + str.slice(1).replace(/-/g, ' ');
console.log(newStr);
newStr1 = newStr.split(' ').splice(4,1).join();
newStr1 = newStr1.replace('им', 'о');
newStr2 = newStr.split(' ').slice(0,4).join(' ');
console.log(newStr2);
console.log(newStr1);



/////////////////////////////////////////

/*let arr = [20, 33, 1, 'Человек', 2, 3];

let newArr = [];

for (let i = 0; i < arr.length; i++) {
	if (typeof arr[i] === 'string') {
		continue;
  } else {
  	newArr.push(arr[i]**3);
  }
}

let sum = newArr.reduce(function(i, item){
	return i + item;
});

console.log(Math.sqrt(sum));


/////////////////////////////////////////

function fu(a) {
	if (typeof a !== 'string') {
		console.log('Введена не строка')
	} else {
		console.log(a.trim());
	} if (a.length > 50) {
    a = a.slice(1,50) + '...';
    return a
  }
};

fu('1234567891011121314151617181920212223242526272829303123343536373839404142434445464748495051525354')*/