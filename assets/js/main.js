/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
	navToggle = document.getElementById('nav-toggle'),
	navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
	navToggle.addEventListener('click', () =>{
		navMenu.classList.add('show-menu')
	})
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
	navClose.addEventListener('click', () =>{
		navMenu.classList.remove('show-menu')
	})
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
	const navMenu = document.getElementById('nav-menu')
	// When we click on each nav__link, we remove the show-menu class
	navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = ()=> {
	const header = document.getElementById('header')
	// when the scroll is greater than 50 viewport height, add the scroll header class to header tag
	this.scrollY >= 50
        ? header.classList.add('bg-header')
        : header.classList.remove('bg-header');
}
window.addEventListener('scroll', scrollHeader);


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)


/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
    this.scrollY >= 350
        ? scrollUp.classList.add('show-scroll')
        : scrollUp.classList.remove('show-scroll');
};
window.addEventListener('scroll', scrollUp);

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
	origin: 'top',
	distance: '60px',
	duration: 2500,
	delay: 300
})

sr.reveal(`.home__data, .footer__container, .footer__group`)
sr.reveal(`.home__img`, {delay: 600, origin:'bottom'})
sr.reveal(`.logos__img, .program__card, .pricing__card`, {interval: 100})
sr.reveal(`.choose__img, .calculate__content`, { origin: 'left' })
sr.reveal(`.choose__content, .calculate__img`, { origin: 'right' })




/*=============== CALCULATE JS ===============*/
const calculateForm = document.getElementById('calculate-form'),
      calculateCm = document.getElementById('calculate-cm')
	  calculateKg = document.getElementById('calculate-kg')
	  calculateMsg = document.getElementById('calculate-msg')

const calculateBmi = (e)=> {
    e.preventDefault();

    // Check if the fields have a value
	if( calculateCm.value === '' || calculateKg.value === '') {
        //add and remove color
        calculateMsg.classList.remove('color-purple');
        calculateMsg.classList.add('color-red');

        //show msg
        calculateMsg.textContent = 'Fill in the Height and Weight ✍';

        // Remove message 4sec
		setTimeout( ()=> {
			calculateMsg.textContent = ''
		}, 4000)
    } else {
		//BMI formula
		const cm = calculateCm.value / 100,
		      kg = calculateKg.value,
			  bmi = Math.round( kg / (cm * cm))

		// show health status
		if( bmi <= 18.5) {
			//add color & display msg
			calculateMsg.classList.add('color-purple');
			calculateMsg.textContent = `Your BMI is ${bmi} and you are skinny 😌`;
		} else if( bmi < 25) {
			calculateMsg.classList.add('color-purple');
			calculateMsg.textContent = `Your BMI is ${bmi} and you are healthy 🥳`;
		} else {
			calculateMsg.classList.add('color-purple');
            calculateMsg.textContent = `Your BMI is ${bmi} and you are overweight 😌`;
		}

		// clear input fields
		calculateCm.value = ''
		calculateKg.value = '';

		//remove msg 5sec
		setTimeout( ()=> {
			calculateMsg.textContent = ''
		}, 5000)
	}
}

calculateForm.addEventListener( 'submit', calculateBmi)

/*=============== EMAIL JS ===============*/

const contactForm = document.getElementById('contact-form'),
    contactMsg = document.getElementById('contact-msg'),
    contactUser = document.getElementById('contact--user')

const sendEmail = (e)=> {
	e.preventDefault()

	//check if the field has a value
	if( contactUser.value === '') {
		//add & remove color
		contactMsg.classList.remove('color-purple');
		contactMsg.classList.add('color-red')

		//show msg
		contactMsg.textContent = ' Please enter your email '

		//remove msg after 4sec
		setTimeout(() => {
			contactMsg.textContent = ''
		}, 4000);
	} else {
		// serviceID - templateID - #form - publicKey
		emailjs.sendForm(
            'service_vumf5o5',
            'template_8i7iwrt',
            '#contact-form',
            'igv-6_bbCZbZeAWna'
        ).then( () =>{
			//show msg and add color
			contactMsg.classList.add('color-purple');
			contactMsg.textContent = 'You registered successfully 💪'

			//remove msg after 5sec
			setTimeout(() => {
				contactMsg.textContent = ''
			}, 5000);
		}, (err) =>{
			//incase of mail sending error
			alert('OOPS! Something went wrong...', err)
		})

	//clear input fields
	contactUser.value = ''
	}
}

contactForm.addEventListener('submit', sendEmail)








