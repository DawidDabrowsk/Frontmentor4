const navigation = document.querySelector('.nav')
const arrowFeatures = document.querySelector('.arrow-icon-features')
const arrowCompany = document.querySelector('.arrow-icon-company')
const burgerIcon = document.querySelector('.burger-icon')
const xIcon = document.querySelector('.x-icon')
const burgerNav = document.querySelector('.burger')
const shadowBody = document.querySelector('.x')
const feature = document.querySelectorAll('.feature')
const companyDetails = document.querySelectorAll('.company-details')

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

const showFeatures = () => {
	arrowFeatures.classList.toggle('arrow-up')
	arrowFeatures.classList.contains('arrow-up')
		? feature.forEach(feature => {
				feature.style.display = 'block'
		  })
		: feature.forEach(feature => {
				feature.style.display = 'none'
		  })
}

const showCompanyDetails = () => {
    arrowCompany.classList.toggle('arrow-up')
	arrowCompany.classList.contains('arrow-up')
		? companyDetails.forEach(detail => {
				detail.style.display = 'block'
		  })
		: companyDetails.forEach(detail => {
				detail.style.display = 'none'
		  })
}

arrowCompany.addEventListener('click', showCompanyDetails)
arrowFeatures.addEventListener('click', showFeatures)
burgerNav.addEventListener('click', changeIcon)
