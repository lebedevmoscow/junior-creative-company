const burger = document.querySelector('.navbar__burger')
const navbar = document.querySelector('.navbar__list')

// If click on burger menu, this adds additional css classes on navbar
burger.addEventListener('click', () => {
	navbar.classList.toggle('navbar__list-opened')
	if (navbar.classList.contains('navbar__list-opened')) {
		navbar.style.left = 0
	} else {
		navbar.style.left = '-30%'
	}
})
