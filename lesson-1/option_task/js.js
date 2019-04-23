let num = 33721;

num = '' + num;

num = num.split('');

let current = 1;

for (let i = 0; i < num.length; i++) {
	current *= num[i];
};

console.log(current);

current = current ** 3;

current = '' + current;

current = current.split('');

current = current.splice(0,2);

current = current.join('');

current = + current;

console.log(current);
