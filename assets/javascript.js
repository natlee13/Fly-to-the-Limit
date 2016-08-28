// image gallery slider on index.html & testimonial slider


function moveNext() { //moves the class current to the next element sibling, 
	//or if there isn't one, to the first element child of the parent e.g the first photo.
	var oCurrent = document.querySelector('.current');
	oCurrent.className = '';

	if (oCurrent.nextElementSibling != null) {
		oCurrent.nextElementSibling.className = 'current';
	} else {
		oCurrent.parentNode.firstElementChild.className = 'current';
	}
}

function movePrevious() { //makes the previous element sibling the current 
	//one by giving it the current class (or the last element child of the parent eg the last photo.

	var oCurrent = document.querySelector('.current');
	oCurrent.className = '';

	if (oCurrent.previousElementSibling != null) {
		oCurrent.previousElementSibling.className = 'current';
	} else {
		oCurrent.parentNode.lastElementChild.className = 'current';
	}
}

function moveNextTestimonial() { //moves the class current testimonial to the next 
	//testimonial or back to the first testimonial.
	var oCurrentTest = document.querySelector('.currentTestimonial');
	oCurrentTest.className = '';

	if (oCurrentTest.nextElementSibling != null) {
		oCurrentTest.nextElementSibling.className = 'currentTestimonial';

	} else {
		oCurrentTest.parentNode.firstElementChild.className = 'currentTestimonial';
	}
}

function movePreviousTestimonial() { // moves the class currentTestimonial to 
	//the previous testimonial, or to the last testimonial.

	var oCurrent = document.querySelector('.currentTestimonial');
	oCurrent.className = '';

	if (oCurrent.previousElementSibling != null) {
		oCurrent.previousElementSibling.className = 'currentTestimonial';
	} else {
		oCurrent.parentNode.lastElementChild.className = 'currentTestimonial';
	}
}

var oTitleWords = document.querySelector('#titleWords'); //if the page has #titleWords, run the following script.
if (oTitleWords != null) {

	var oNext = document.querySelector('.fa-chevron-circle-right');
	oNext.addEventListener('click', moveNext);

	setInterval(moveNext, 8000);

	oPrevious = document.querySelector('.fa-chevron-circle-left');
	oPrevious.addEventListener('click', movePrevious);
}


if (oTitleWords != null) {

	var oNextTestimonial = document.querySelector('.fa-chevron-circle-right');
	oNextTestimonial.addEventListener('click', moveNextTestimonial);

	setInterval(moveNextTestimonial, 8000);

	var oPreviousTestimonial = document.querySelector('.fa-chevron-circle-left');
	oPreviousTestimonial.addEventListener('click', movePreviousTestimonial);
}

//..........................date picker for booking.html...........................................
var oBooking = document.querySelector('#bookingBackground'); //identifying this JS is to run on bookings page

//datepicker from xdsoft.net/jqplugins/datetimepicker

if (oBooking != null) {

	jQuery.datetimepicker.setLocale('en');

	$('#flightDate').datetimepicker({ //selecting id flightDate

		timepicker: false,
		format: 'd/m/Y'
	});
}

//...........................form validation of booking form/contact form......................
//functions for form validations

function checkRequired(oInput) { //check if anything written in input/textarea

	var sValue = oInput.value;
	var oMessage = oInput.nextElementSibling;
	var bValid = false;

	if (sValue != '') {
		oMessage.innerHTML = '✓';
		oMessage.className = 'correct';
		bValid = true;

	} else {
		oMessage.innerHTML = '* Required';
		oMessage.className = 'incorrect';
	}
	return bValid;
}

function checkAlphabetic(oInput) { //checks that what is typed in the input is letters only

	var sValue = oInput.value;
	var oMessage = oInput.nextElementSibling;
	var bValid = false;

	if (sValue != '') {

		var oAlphabeticExp = /^[A-Za-z]*$/;

		if (oAlphabeticExp.test(sValue) == true) {
			oMessage.innerHTML = '✓';
			oMessage.className = 'correct';
			bValid = true;


		} else {
			oMessage.innerHTML = '*Enter valid name';
			oMessage.className = 'incorrect';
		}

	} else {
		oMessage.innerHTML = '*Required';
		oMessage.className = 'incorrect';
	}
	return bValid;
}

function checkEmail(oInput) { //checks email is in correct format to be valid

	var sValue = oInput.value;
	var oMessage = oInput.nextElementSibling;
	var bValid = false;

	if (sValue != '') {

		var oEmailExp = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;

		if (oEmailExp.test(sValue) == true) {
			oMessage.innerHTML = '✓';
			oMessage.className = 'correct';
			bValid = true;

		} else {
			oMessage.innerHTML = '* Enter valid email';
			oMessage.className = 'incorrect';
		}

	} else {
		oMessage.innerHTML = '* Required';
		oMessage.className = 'incorrect';
	}
	return bValid;

}

function checkTickChecked(sClassName) { //checks if the checkbox is ticked.

	var bValid = false;
	var oChecked = document.querySelector(sClassName + ':checked');

	if (oChecked != null) {

		bValid = true;
	} else {

	}

	return bValid;
}

//validation of booking form..........................................................................

var oBooking = document.querySelector('#bookingBackground'); //id the id #bookingsBackground is found, run the script
if (oBooking != null) {


	var oFlightDate = document.querySelector('#flightDate');
	oFlightDate.addEventListener('blur', function() {
		checkRequired(oFlightDate); //checks a flight date as been entered
	});

	var oFirstName = document.querySelector('#firstName');
	oFirstName.addEventListener('blur', function() {
		checkAlphabetic(oFirstName); //checks the name entered is letters only
	});

	var oLastName = document.querySelector('#lastName');
	oLastName.addEventListener('blur', function() {
		checkAlphabetic(oLastName); //checks the name entered is letters only
	});

	var oEmail = document.querySelector('#bookingEmail');
	oEmail.addEventListener('blur', function() {
		checkEmail(oEmail); //checks that the email is valid in its structure.
	});

	var oPhone = document.querySelector('#contactNumber');
	oPhone.addEventListener('blur', function() {
		checkRequired(oPhone); //checks there is input in the contact phone section.
	});

	var oSubmitForm = document.querySelector('#booking');
	oSubmitForm.addEventListener('submit', function(e) { //makes individual checks of 
		//each field, if all are true (correct) form will submit.  Form won't be submitted 
		//if any are false.

		var bCheckFlightDate = checkRequired(oFlightDate);
		var bCheckFirstName = checkAlphabetic(oFirstName);
		var bCheckLastName = checkAlphabetic(oLastName);
		var bCheckEmail = checkEmail(oEmail);
		var bCheckPhone = checkRequired(oPhone);
		var bCheckTerms = checkTickChecked('.tickBox');

		var bFormValid = bCheckFlightDate && bCheckFirstName && bCheckLastName &&
			bCheckEmail && bCheckPhone && bCheckTerms;

		if (bFormValid == false) {
			e.preventDefault();
		}
	});
}

//.......................terms and conditions pop up on booking page...........

if (oBooking != null) {

	var oTermsControl = document.querySelector('#tcPopupControl');
	oTermsControl.addEventListener('click', function(e) {

		e.preventDefault();
		var oOverlayTerms = document.querySelector('#termsOverlay');
		oOverlayTerms.className = '';

		var oTermsPopup = document.querySelector('#termsPopup');
		oTermsPopup.classList.remove('hide');
	});

	var oCloseButton = document.querySelector('.close-button');
	oCloseButton.addEventListener('click', function() {

		var oOverlay = document.querySelector('#termsOverlay');
		oOverlay.className = 'hide';

		var oTermsPopup = document.querySelector('#termsPopup');
		oTermsPopup.classList.add('hide');

	});

}


//validation of contact form........................

//identify that this JS is for contact.html by selecting an id that appears on the page.
var oContactBackground = document.querySelector('#contactBackground');
if (oContactBackground != null) { //if the id is found run the JS.


	var oFirstName = document.querySelector('#contactFirstName');
	oFirstName.addEventListener('blur', function() {
		checkAlphabetic(oFirstName);
	});

	var oLastName = document.querySelector('#contactLastName');
	oLastName.addEventListener('blur', function() {
		checkAlphabetic(oLastName);
	});

	var oEmail = document.querySelector('#contactEmail');
	oEmail.addEventListener('blur', function() {
		checkEmail(oEmail);
	});

	var oMessage = document.querySelector('#contactMessage');
	oMessage.addEventListener('blur', function() {
		checkRequired(oMessage);

	});

	var oSubmitForm = document.querySelector('#contactForm');
	oSubmitForm.addEventListener('submit', function(e) {

		var bCheckFirstName = checkAlphabetic(oFirstName); //check each required field is correct
		var bCheckLastName = checkAlphabetic(oLastName);
		var bCheckEmail = checkEmail(oEmail);
		var bCheckMessage = checkRequired(oMessage);

		var formValid = bCheckFirstName && bCheckLastName && bCheckEmail && bCheckMessage;

		if (formValid == false) { //if any of form fields are not correctly filled in, prevent submission
			e.preventDefault();
		}
	});

}


//..........................map slider on contact.html..............................

//identify that this JS is for contact.html by selecting an id that appears on this page.
var oMapGallery = document.querySelector('#mapGallery');
if (oMapGallery != null) { //if the id is found, run the JS

	var oNext = document.querySelector('.fa-chevron-circle-right');
	oNext.addEventListener('click', function() { //makes the next map the current one

		var oCurrentMap = document.querySelector('.currentMap');
		oCurrentMap.className = '';

		if (oCurrentMap.nextElementSibling != null) {
			oCurrentMap.nextElementSibling.className = 'currentMap';
		} else {
			oCurrentMap.parentNode.firstElementChild.className = 'currentMap';
		}
	});

	var oPrevious = document.querySelector('.fa-chevron-circle-left');
	oPrevious.addEventListener('click', function() { //makes the previous map the current one.

		var oCurrentMap = document.querySelector('.currentMap');
		oCurrentMap.className = '';

		if (oCurrentMap.previousElementSibling != null) {
			oCurrentMap.previousElementSibling.className = 'currentMap';
		} else {
			oCurrentMap.parentNode.lastElementChild.className = 'currentMap';
		}

	});
}

//...........................pilot/fleet pop ups...................................................
var oCompanyRight = document.querySelector('#aboutPhoto');
if (oCompanyRight != null) { //selects for the JS to run on the about page.

	var aPopupControls = document.querySelectorAll('.popupControl');

	for (var i = 0; i < aPopupControls.length; i++) {

		aPopupControls[i].addEventListener('click', function(e) {

			e.preventDefault();
			var oOverlay = document.querySelector('#overlay');
			oOverlay.className = '';

			var oPopUp = this.parentNode.nextElementSibling;
			oPopUp.classList.remove('hide');

		});
	}

	var aCloseButtons = document.querySelectorAll('.close-button');

	for (var i = 0; i < aPopupControls.length; i++) {

		aCloseButtons[i].addEventListener('click', function() {

			var oOverlay = document.querySelector('#overlay');
			oOverlay.className = 'hide';

			var oPopUp = this.parentNode;
			oPopUp.classList.add('hide');

		});
	}

}