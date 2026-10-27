// Dynamic hero heading text changing

const words = ['weekends', 'mornings', 'deep work', 'slow sundays'];
const word = document.getElementById("text-changer");

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

const allbtn = document.getElementById("all");
const hotbtn = document.getElementById("hot");
const coldbtn = document.getElementById("cold");
const dessertsbtn = document.getElementById("desserts");