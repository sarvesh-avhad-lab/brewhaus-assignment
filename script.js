// Dynamic hero heading text changing

const words = ['weekends', 'mornings', 'deep work', 'slow sundays'];
const word = document.getElementById("text-changer");

let i = 0;

function textChanger() {
	word.textContent = words[i];
	i = (i + 1) % words.length;
}

textChanger() 

setInterval(textChanger, 2000);


// Our menu section 
