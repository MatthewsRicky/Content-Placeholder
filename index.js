const header = document.getElementById("header");
const title = document.getElementById("title");
const exerpt = document.getElementById("exerpt");
const profileImage = document.getElementById("profle_image");
const names = document.getElementById("name");
const date = document.getElementById("date");

const animatedBgs = document.querySelectorAll(".animated-bg");
const animatedBgTexts = document.querySelectorAll(".animated-bg-text");

setTimeout(getDdata, 2500);

function getDdata() {
	header.innerHTML =
		'<img src="https://images.unsplash.com/photo-1509514026798-53d40bf1aa09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />';
	title.innerHTML = "Loremm ipsum dolor sit amet";
	exerpt.innerHTML =
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis";
	profileImage.innerHTML =
		'<img src="https://randomuser.me/api/portraits/men/11.jpg" alt="" />';
	names.innerHTML = "John Doe";
	date.innerHTML = "Dec 10 2022";

	animatedBgs.forEach((bg) => bg.classList.remove("animated-bg"));
	animatedBgTexts.forEach((bg) => bg.classList.remove("animated-bg-text"));
}
