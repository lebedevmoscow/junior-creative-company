const burger = document.querySelector('.navbar__burger')
const navbar = document.querySelector('.navbar__list')

burger.addEventListener('click', () => {
	navbar.classList.toggle('navbar__list-opened')
	console.log('click')
	if (navbar.classList.contains('navbar__list-opened')) {
		navbar.style.left = 0
	} else {
		navbar.style.left = '-30%'
	}
})
