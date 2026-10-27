const words = ['weekends', 'mornings', 'deep work', 'slow sundays'];

let word = document.getElementsByClassName("text-changer");

let i = 0;

function textChanger() {
	word.textContent = words[i];
	index = (i + 1) % words.length;
}

 setInterval(textChanger, 2000);