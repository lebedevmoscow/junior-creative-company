// All Checkboxes in DOM
const inputs = document.querySelectorAll('input')

// All binded elemets to checkboxes
const items = document.querySelectorAll('.binded')

inputs.forEach((input) => {
	// on each click on checkbox do following
	input.addEventListener('click', () => {
		// If its 'turn off/on' checkbox, display none all of binded elements
		if (input.id === 'All') {
			for (let i = 1; i < inputs.length; i++) {
				inputs[i].checked = !inputs[i].checked
				for (let j = 0; j < items.length; j++) {
					input.checked
						? (items[j].style.display = 'none')
						: (items[j].style.display = 'block')
				}
			}
		}

		// Else if it not, just display none correct element
		for (let i = 0; i < inputs.length; i++) {
			if (items[i].innerText === input.id) {
				input.checked
					? (items[i].style.display = 'none')
					: (items[i].style.display = 'block')
			}
		}
	})
})
