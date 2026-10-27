// Dynamic hero heading text changing

const words = ['weekends', 'mornings', 'deep work', 'slow sundays'];
const word = document.querySelector("#text-changer");

let i = 0;

function textChanger() {
	word.textContent = words[i];
	i++;
	if(i==4) i=0;
}

textChanger() 

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

// Subscription plans;

// Explorer plan
const explorer = ['Billed monthly · cancel anytime', 'Billed $168 yearly · save $48']