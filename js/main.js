/* main Js file build by JeanDoe */

/*============ show menu ============*/

const navMenu = document.getElementById('nav-menu'),
	  navToggle = document.getElementById('nav-toggle'),
	  navClose = document.getElementById('nav-close')

/*====== menu show ======*/

if(navToggle){
	navToggle.addEventListener('click', () =>{
		navMenu.classList.add('show-menu')
	})
}

/*====== menu hidden ======*/
if(navClose){
	navClose.addEventListener('click', () => {
		navMenu.classList.remove('show-menu')
	})
}

/*================ Remove Menu Mobile ============*/
const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
	const navMenu = document.getElementById('nav-menu')
	//When we click on each nav_link, we remove the show-menu class
	navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*============== Change Background Header ==============*/

function scrollHeader(){
	const header = document.getElementById('header')
	//When we scroll is greater than 100 viewport height, add the scrolll-header class to header tag
	if(this.scrollY >= 100) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


/*============== SWIPER DISCOVER ==============*/

let swiper = new Swiper(".discover_container", {
	effect: "coverflow",
	grabCursor: true,
	centeredSlides: true,
	slidesPerView: "auto",
	loop: true,
	spaceBetween: 32,
	coverflowEffect: {
		rotate: 0,
	},
})


/*============== VIDEO ==============*/
const videoFile = document.getElementById('video-file'),
	  videoButton = document.getElementById('video-btn'),
	  videoIcon = document.getElementById('video-icon')

function playPause(){
	if(videoFile.paused){
		//Play video
		videoFile.play()
		// We change the icon
		videoIcon.classList.add('fa-pause')
		videoIcon.classList.remove('fa-play')
	}else{
		//Pause video
		videoFile.pause()
		// We change the icon
		videoIcon.classList.remove('fa-pause')
		videoIcon.classList.add('fa-play')
	}
}
videoButton.addEventListener('click', playPause)

function finalVideo(){
	// Video ends, icon change
		videoIcon.classList.remove('fa-pause')
		videoIcon.classList.add('fa-play')
}
// ended, when the video ends
videoFile.addEventListener('ended', finalVideo)


/*============== SHOW SCROLL UP ==============*/
function scrollUp(){
	const scrollUp = document.getElementById('scroll-up');
	// When the scroll is higher than 200 viewport height, add the show-scroll class to the tag with the scroll-top class
	if(this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*================ SCROLL SECTIONS ACTIVE LINK ================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
	const scrollY = window.pageYOffset
	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight
		const sectionTop = current.offsetTop - 50;
		sectionId = current.getAttribute('id')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
		}else{
			document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
		}
	})
}
window.addEventListener('scroll', scrollActive)



/*================ SCROLL REAVEAL ANIMATION ================*/

const sr = ScrollReveal({
	distance: '60px',
	duration: 2800,
	// reset: true,
})

sr.reveal(`.home_data, .home_social-link, .home_info,
			.discover_container,
			.experience_data, .experience_overlay,
			.place_card,
			.sponsor_content,
			.footer_data, .footer_rights`,{
	origin: 'top',
	interval: 100,
})

sr.reveal(`.about_data,
			.video_description,
			.subscribe_description`,{
	origin: 'left',
	
})

sr.reveal(`.about_img-overlay,
			.video_content,
			.subscribe_form`,{
	origin: 'right',
	interval: 100,
})


//--------- DARK LIGHT THEME -------------

const themeButton = document.getElementById('theme-btn')
const darkTheme ='dark-theme'
const iconTheme ='fa-sun'

//Prevouisly selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

//We obtain the current theme that the interface has by validating the dark-theme class

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'fa-moon' : 'fa-sun'

//We validate if the user previously choose a topic

if(selectedTheme){
//	if the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
	document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
	themeButton.classList[selectedIcon === 'fa-moon' ? 'add' : 'remove'](iconTheme)
}

//Activate / deactivate the theme manually whith the button
themeButton.addEventListener('click', () => {
//	Add or remove the dark / icon theme
	document.body.classList.toggle(darkTheme)
	themeButton.classList.toggle(iconTheme)
//	We save the theme and the current icon that the user chose
	localStorage.setItem('selected-theme', getCurrentTheme())
	localStorage.setItem('selected-icon', getCurrentIcon())
})









