const navigation = document.querySelector('.nav')
const arrow = document.querySelector('.arrow-icon')
const burgerIcon = document.querySelector('.burger-icon')
const xIcon = document.querySelector('.x-icon')
const burgerNav = document.querySelector('.burger')
const shadowBody = document.querySelector('.x')

const changeIcon = () => {
	if (burgerIcon.classList.contains('is-active')) {
		burgerIcon.classList.remove('is-active')
		xIcon.classList.add('is-active')
		navigation.style.display = 'flex'
        shadowBody.classList.add('shadow')
	} else {
		burgerIcon.classList.add('is-active')
		xIcon.classList.remove('is-active')
		navigation.style.display = 'none'
        shadowBody.classList.remove('shadow')
	}
}

burgerNav.addEventListener('click', changeIcon)
