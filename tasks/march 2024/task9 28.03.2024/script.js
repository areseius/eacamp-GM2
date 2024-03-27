const listItems = document.querySelectorAll("li");
const name = document.querySelector("h1");
const bio = document.querySelector(".bio");
const header = document.querySelector("header");

header.innerHTML += `<img
src="https://www.thoughtco.com/thmb/6PzsBpB0zI5FEd6M6H6DBCkVpTs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/socrates-greece-athens-546975617-589b585e3df78c47586efb7d.jpg"
alt="John Doe's profile image"
/>`;

header.innerHTML = header.innerHTML.split("     ").reverse().join("");

name.style.cursor = "pointer";

listItems.forEach((x) => {
  x.style.color = "purple";
  x.style.fontWeight = "bold";
  x.style.cursor = "pointer";
});

bio.innerHTML += `<p>
Avid adventurer and nature enthusiast with a passion for exploring new
places and capturing the beauty of the world through photography.
</p>`;
