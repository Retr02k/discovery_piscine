document.getElementById('colorBtn')
.addEventListener('click', changeBackgroundColor)

function get_random_num(max) {
	return (Math.floor(Math.random() * max));
}

function changeBackgroundColor() {
	const r = get_random_num(256);
	const g = get_random_num(256);
	const b = get_random_num(256);
	document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}