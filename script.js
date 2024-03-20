const setColor = () => {
	let color = randomColorGenerator();
	document.body.style.backgroundColor = color;
	document.getElementById("clr").innerText = color;
};
const randomColorGenerator = () => {
	const idLength = 6;
	const str = "abcdef1234567890";
	let id = "";
	for (let i = 0; i < idLength; i++) {
		const randomPosition = Math.floor(Math.random() * str.length);
		id += str[randomPosition];
	}
	let color = "#" + id;
	return color;
};
