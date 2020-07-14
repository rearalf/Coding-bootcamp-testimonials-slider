const team = [
	{
		name: 'Tanya Sinclair',
		sentence: ` “ I’ve been interested in coding for a while but never taken the jump, until now.
    I couldn’t recommend this course enough. I’m now in the job of my dreams and so
    excited about the future. ”`,
		position: 'UX Engineer',
		img: './images/image-tanya.jpg',
	},
	{
		name: 'John Tarkpor',
		sentence: ` “ If you want to lay the best foundation possible I’d recommend taking this course.
    The depth the instructors go into is incredible. I now feel so confident about
    starting up as a professional developer. ”`,
		position: 'Junior Front-end Developer',
		img: './images/image-john.jpg',
	},
];

let Item = 0;

const sentence = document.getElementById('sentence');
const name = document.getElementById('name');
const position = document.getElementById('position');
const img = document.getElementById('avatar');

const prev = document.getElementById('prev');
const next = document.getElementById('next');

function showPerson(num){
	const person = team[num];
	img.src = person.img;
	console.log(img.src);
	name.textContent = person.name;
	position.textContent = person.position;
	sentence.textContent = person.sentence;
}

prev.addEventListener('click', () => {
	Item--;
	if (Item < 0) {
		Item = team.length;
	}
	showPerson(Item);
});

next.addEventListener('click', () => {
	Item++;
	if (Item > team.length) {
		Item = 0;
	}
	showPerson(Item);
});
