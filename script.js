// Dynamic hero heading text changing

const words = ['weekends', 'mornings', 'deep work', 'slow sundays'];
const word = document.querySelector("#text-changer");


let i = 0;

function textChanger() {
	word.textContent = words[i];
	i++;
	if(i==4) i=0;
}

setInterval(textChanger, 2000);

/*************************************** */
// Our menu section 

const allbtn = document.querySelector("#all");
const hotbtn = document.querySelector("#hot");
const coldbtn = document.querySelector("#cold");
const dessertsbtn = document.querySelector("#desserts");

const allMenuCards = document.querySelectorAll(".menu-card");


allbtn.addEventListener("click", function() {
	cardHider("all");
	highlightButton(allbtn);
});

hotbtn.addEventListener("click", function() {
	cardHider("hot-card");
	highlightButton(hotbtn);
});

coldbtn.addEventListener("click", function() {
	cardHider("cold-card");
	highlightButton(coldbtn);
});

dessertsbtn.addEventListener("click", function () {
	cardHider("desserts-card");
	highlightButton(dessertsbtn);
});


function cardHider(option) {

	for (const item of allMenuCards) {

		if(option === "all") {
			item.classList.remove("hide");
		} 
		else if(item.classList.contains(option)) {
			item.classList.remove("hide");
		} 
		else {
			item.classList.add("hide");
		}

	}

}

// Hightlight menu option

const allMenuOptions = document.querySelectorAll(".menu-button");

allbtn.classList.add("bgcolorClass");

function highlightButton(clickedBtn) {

    for (const ele of allMenuOptions){
		ele.classList.remove("bgcolorClass");
	}

    clickedBtn.classList.add("bgcolorClass");
}


/*************************************** */
// Hamburger Icon click;

const hamburgerIcon = document.querySelector("#hamburger-icon-img");
const closeMenuBtn = document.querySelector("#close-menu-btn");
const hamburgerMenu = document.querySelector("#hamburger-menu");

// Open 
hamburgerIcon.addEventListener("click", openHamburgerMenu);

function openHamburgerMenu() {
	hamburgerMenu.classList.add("showHamburger");
}


// Close 
closeMenuBtn.addEventListener("click", closeHamburgerMenu);

function closeHamburgerMenu() {
	hamburgerMenu.classList.remove("showHamburger");
}




/*************************************** */
// Subscription plans;


const switchbtn = document.querySelector("#switch-btn");
const checkBox = document.querySelector("#input-checkbox");

// Explorer plan
const explorerPrice = document.querySelector("#Explorer-dollar");
const explorerPara = document.querySelector("#explorer-p");

//Enthusiast plan 
const enthusiastPrice = document.querySelector("#enthusiast-dollar");
const enthusiastPara = document.querySelector("#enthusiast-p");

// connoisseur plan 
const connoisseurPrice = document.querySelector("#connoisseur-dollar");
const connoisseurPara = document.querySelector("#connoisseur-p");

checkBox.addEventListener("change", function() {
	if (checkBox.checked) {
		explorerPrice.textContent = "$14";
        explorerPara.textContent = "Billed $168 yearly · save $48";	

		enthusiastPrice.textContent = "$23";
        enthusiastPara.textContent = "Billed $276 yearly · save $72";

		connoisseurPrice.textContent = "$39";
        connoisseurPara.textContent = "Billed $468 yearly · save $120";
    } 
	else {
		explorerPrice.textContent = "$18";
		explorerPara.textContent = "Billed monthly · cancel anytime";

		enthusiastPrice.textContent = "$29";
        enthusiastPara.textContent = "Billed monthly · cancel anytime";

		connoisseurPrice.textContent = "$49";
        connoisseurPara.textContent = "Billed monthly · cancel anytime";
	}
});

/*************************************** */
// FAQ Section
const question1 = document.querySelector(".question1");
const question2 = document.querySelector(".question2");
const question3 = document.querySelector(".question3");
const question4 = document.querySelector(".question4");
const question5 = document.querySelector(".question5");
const question6 = document.querySelector(".question6");


const answer1 = document.querySelector(".answer1");
const answer2 = document.querySelector(".answer2");
const answer3 = document.querySelector(".answer3");
const answer4 = document.querySelector(".answer4");
const answer5 = document.querySelector(".answer5");
const answer6 = document.querySelector(".answer6");


const expander1 = document.querySelector(".expander1");
const expander2 = document.querySelector(".expander2");
const expander3 = document.querySelector(".expander3");
const expander4 = document.querySelector(".expander4");
const expander5 = document.querySelector(".expander5");
const expander6 = document.querySelector(".expander6");


// const allAnswers = document.querySelectorAll(".answer");


question1.addEventListener("click", function(){ 
	paraExpander(answer1);
	expanderChanger(expander1);
});

question2.addEventListener("click", function(){
	paraExpander(answer2);
	expanderChanger(expander2);
});

question3.addEventListener("click", function(){
	paraExpander(answer3);
	expanderChanger(expander3);
});

question4.addEventListener("click", function(){
	paraExpander(answer4);
	expanderChanger(expander4);
});

question5.addEventListener("click", function(){
	paraExpander(answer5);
	expanderChanger(expander5);
});

question6.addEventListener("click", function(){
	paraExpander(answer6);
	expanderChanger(expander6);
});

// Expander function
function paraExpander(showAnswer) {


	showAnswer.classList.toggle('showPara');
}

function expanderChanger(expander) {
	expander.classList.toggle('changeExpander');

	if (expander.textContent === '-') expander.textContent = '+';
	else expander.textContent = '-';
}





// Review Section

const reviewCards = document.querySelectorAll(".review-middle");

const sliders = document.querySelectorAll(".slider-review");

let idx = 0;

function reviewChanger() {
	reviewCards[idx].classList.add('ReviewHider');    
  	sliders[idx].classList.remove('slider-selected');   
	idx++;
	if( idx == 4) idx=0;
	reviewCards[idx].classList.remove('ReviewHider'); 
  	sliders[idx].classList.add('slider-selected');
}

setInterval(reviewChanger, 5000);



const goRight = document.querySelector(".go-right");

goRight.addEventListener("click", function() {
	rightCardChanger();
})

function rightCardChanger() {
	reviewCards[idx].classList.add('ReviewHider');    
  	sliders[idx].classList.remove('slider-selected');   
	idx++;
	if(idx === 4) idx = 0;
	reviewCards[idx].classList.remove('ReviewHider'); 
  	sliders[idx].classList.add('slider-selected'); 
}


const goLeft = document.querySelector(".go-left");
goLeft.addEventListener("click", function() {
	leftCardChanger();
})

function leftCardChanger() {
	reviewCards[idx].classList.add('ReviewHider');    
  	sliders[idx].classList.remove('slider-selected');   
	idx--;
	if(idx === -1) idx = 3;
	reviewCards[idx].classList.remove('ReviewHider'); 
  	sliders[idx].classList.add('slider-selected');
}