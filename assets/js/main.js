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


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL REVEAL ANIMATION ===============*/


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
        calculateMsg.classList.remove('color-green');
        calculateMsg.classList.add('color-red');

        //show msg
        calculateMsg.textContent = 'Fill in the Height and Weight ✍';

        // Remove message three seconds
		setTimeout( ()=> {
			calculateMsg.textContent = ''
		}, 3000)
    } else {
		//BMI formula
		const cm = calculateCm.value / 100,
		      kg = calculateKg.value,
			  bmi = Math.round( kg / (cm * cm))

		// show health status
		if( bmi <= 18.5) {
			//add color & display msg
			calculateMsg.classList.add('color-green')
			calculateMsg.textContent = `Your BMI is ${bmi} and you are skinny 😌`;
		} else if( bmi < 25) {
			calculateMsg.classList.add('color-green');
			calculateMsg.textContent = `Your BMI is ${bmi} and you are healthy 🥳`;
		} else {
			calculateMsg.classList.add('color-green');
            calculateMsg.textContent = `Your BMI is ${bmi} and you are overweight 😌`;
		}

		// clear input fields
		calculateCm.value = ''
		calculateKg.value = '';

		//remove msg 4sec
		setTimeout( ()=> {
			calculateMsg.textContent = ''
		}, 4000)
	}
}

calculateForm.addEventListener( 'submit', calculateBmi)

/*=============== EMAIL JS ===============*/
