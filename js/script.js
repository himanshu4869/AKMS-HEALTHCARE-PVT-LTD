////////// JAVASCRIPT CODE START //////////
$(document).ready(function(){
    $(".submenu").click(function(){
        $(".dropdown").toggle(1);
    });
});
////////// TOP_6_CARDS //////////
function viewallBtn1() {
    window.open("product1.html");
}

function viewallBtn2() {
    window.open("product2.html");
}

function viewallBtn3() {
    window.open("product3.html");
}

function viewallBtn4() {
    window.open("product4.html");
}

function viewallBtn5() {
    window.open("product5.html");
}

function viewallBtn6() {
    window.open("product6.html");
}

////////// HEADER_NAV_MENU_BAR //////////
function page_A() {
    window.open("page1.html");
}

function page_B() {
    window.open("page2.html");
}

function page_C() {
    window.open("page3.html");
}

function page_D() {
    window.open("page4.html");
}

function page_E() {
    window.open("page5.html");
}

////////// WEB_ENQUIRY_FORM //////////
let closeForm = function() {
    let form = document.getElementById('contactForm1');
    let open = true;
    
    form.style.display = "block";
    if(open == true){
        form.style.display = "none";
        open = false;
    } 
}

////////// CONTACT_FORM_FOR_WHATSAPP //////////

////////// CONTACT_FORM_FOR_WHATSAPP //////////
function sendwhatsapp(){
    var phonenumber = "+918851215356";
    var name = document.querySelector(".name").value;
    var phone = document.querySelector(".phone").value;
    var message = document.querySelector(".message").value;
    
    var url = "https://wa.me/" + phonenumber + "?text="
    +"*Name :* "+name+"%0a"
    +"*Phone :* "+phone+"%0a"
    +"*Message :* "+message
    +"%0a%0a"
    +"Thanks for support 😀";

    window.open(url, '_blank').focus();
}

/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////

function sendwhatsapp2(){
    var phonenumber = "+918851215356";
    var name = document.querySelector(".name2").value;
    var phone = document.querySelector(".phone2").value;
    var email = document.querySelector(".email2").value;
    var message = document.querySelector(".message2").value;
    
    var url = "https://wa.me/" + phonenumber + "?text="
    +"*Name :* "+name+"%0a"
    +"*Phone :* "+phone+"%0a"
    +"*Email :* "+email+"%0a"
    +"*Message :* "+message
    +"%0a%0a"
    +"Thanks for support 😀";

    window.open(url, '_blank').focus();
}
///////////////////////////////////
///////////////////////////////////
///////////////////////////////////
///////////////////////////////////
///////////////////////////////////
$.fn.jQuerySimpleCounter = function( options ) {
	    var settings = $.extend({
	        start:  0,
	        end:    100,
	        easing: 'swing',
	        duration: 400,
	        complete: ''
	    }, options );

	    var thisElement = $(this);

	    $({count: settings.start}).animate({count: settings.end}, {
			duration: settings.duration,
			easing: settings.easing,
			step: function() {
				var mathCount = Math.ceil(this.count);
				thisElement.text(mathCount);
			},
			complete: settings.complete
		});
	};


$('#number1').jQuerySimpleCounter({end: 1000,duration: 60000});
$('#number2').jQuerySimpleCounter({end: 784,duration: 60000});
$('#number3').jQuerySimpleCounter({end: 486,duration: 60000});
$('#number4').jQuerySimpleCounter({end: 627,duration: 60000});
