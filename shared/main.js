
let backdrop = document.querySelector('.backdrop');
let modalNoButton = document.querySelector('.modal__action--negative');
let selectPlanButtons = document.querySelectorAll('.zone button');
let modal = document.querySelector('.modal');
let toggleMobileNavButton = document.querySelector('.toggle-button');
let mobileNav = document.querySelector('.mobile-nav');

for(let i = 0; i < selectPlanButtons.length; i++) {

	selectPlanButtons[i].addEventListener('click', openModal);
}

backdrop.addEventListener('click', function() {
	//mobileNav.style.display = 'none';
	mobileNav.classList.remove('open');	
	closeModal();
});

if( modalNoButton ) {
	modalNoButton.addEventListener('click', closeModal);
}

function closeModal() {
	//modal.style.display = 'none';
	//backdrop.style.display = 'none';
	if( modal ) {
		modal.classList.remove('open');
	}
	backdrop.classList.remove('open');
}

function openModal() {
	//modal.style.display = 'block';
	//backdrop.style.display ='block';
	modal.classList.add('open');
	backdrop.classList.add('open');
}

toggleMobileNavButton.addEventListener('click', function() {
	mobileNav.classList.add('open');	
	backdrop.classList.add('open');
	console.log('mobilenav accesed');
	//mobileNav.style.display = 'block';
	//backdrop.style.display = 'block';
});
