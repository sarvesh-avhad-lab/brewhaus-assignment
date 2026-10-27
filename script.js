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


// ************************************ //
// Our menu section 

const allbtn = document.querySelector("#all");
const hotbtn = document.querySelector("#hot");
const coldbtn = document.querySelector("#cold");
const dessertsbtn = document.querySelector("#desserts");

const allMenuCards = document.querySelectorAll(".menu-card");

// adding events
allbtn.addEventListener("click", function() {
	cardHider("all");
});

hotbtn.addEventListener("click", function() {
	cardHider("hot");
});

coldbtn.addEventListener("click", function() {
	cardHider("cold");
});

dessertsbtn.addEventListener("click", function () {
	cardHider("desserts");
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


