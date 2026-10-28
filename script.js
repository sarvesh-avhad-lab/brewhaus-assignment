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


// Our menu section 

const allbtn = document.querySelector("#all");
const hotbtn = document.querySelector("#hot");
const coldbtn = document.querySelector("#cold");
const dessertsbtn = document.querySelector("#desserts");

const allMenuCards = document.querySelectorAll(".menu-card");


// adding events
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



// Hamburger Icon click;
const hamburger = document.querySelector("#hamburger-icon-img");
const hamburgerMenu = document.querySelector(".hamburger");

hamburger.addEventListener("click", function() {
	hamburgerMenu.classList.add("showHamburger");
});


// Subscription plans;


// const explorer = ['Billed monthly · cancel anytime', 'Billed $168 yearly · save $48'];

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

// FAQ Section
// const expander1 = document.querySelector(".expander1");
// const expander2 = document.querySelector(".expander2");
// const expander3 = document.querySelector(".expander3");
// const expander4 = document.querySelector(".expander4");
// const expander5 = document.querySelector(".expander5");
// const expander6 = document.querySelector(".expander6");

const expanders = document.querySelector(".expander");

// const answer1 = document.querySelector(".answer1");
// const answer2 = document.querySelector(".answer2");
// const answer3 = document.querySelector(".answer3");
// const answer4 = document.querySelector(".answer4");
// const answer5 = document.querySelector(".answer5");
// const answer6 = document.querySelector(".answer6");

const answers = document.querySelectorAll(".answer");

expander1.addEventListener("click", function() {
	ShowFaqPara("expander1");
});

function ShowFaqPara(clickedbtn) {
	for (const ans of answers) {
		if(ans.classList.contains(clickedbtn)){

		}
	}

}