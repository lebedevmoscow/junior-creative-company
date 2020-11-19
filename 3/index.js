const finder = (str1, str2) => {
	const result = []
	const str = str1.split('')

	console.log('Inputed string 1:', str1)
	console.log('Inputed string 2:', str2)

	// Cast string into array, initial value = ''
	str.reduce((accumulator, current) => {
		// If such a substring is does not exist
		if (!str2.indexOf(accumulator + current)) {
			// If this is last item
			result.push(accumulator + current)
			return accumulator + current

			// Else accumulate
		} else return current
	}, new String(''))

	console.log('Result:', result[result.length - 1])

	return result[result.length - 1]
}

finder('acab', 'ab')
finder('aababbacac', 'abbaabcdbab')
finder('inperator', 'per')
