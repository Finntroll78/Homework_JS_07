

function getFriendlyNumbers(start, end) {
	let arr = [];
	let arr2 = [];

	for (let i = start; i <= end; i++) {
		arr.push(i);
			for (let j = 1; j < arr.length; j++) {
				if (arr[i] % j == 0) {
				arr2.push(j)
			}
		}
	}
}


getFriendlyNumbers(1, 5)

console.log(arr)
console.log(arr2)