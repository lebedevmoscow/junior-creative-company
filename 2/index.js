/**
 *
 * @param {array} Array - Base Array
 * @param {number} K - Offset
 */
const useOffset = (arr, k) => {
	if (k === -1) return console.log('K cannot be negative')
	console.log('Inputed array: ', arr)
	arr = [...arr.slice(k - 1), ...arr.slice(0, k - 1)]
	console.log('Outputed array: ', arr)
}

useOffset([1, 2, 3, 4, 5], 3)
useOffset([4, -1, 5, 192, 0], -1)
useOffset([1, 2, 3, 4, 5], 1)
