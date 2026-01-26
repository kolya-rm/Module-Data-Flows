const film = {
  title: "Killing of Flower Moon",
  director: "Martin Scorsese",
  times: ["15:35"],
  certificate: "15",
  duration: 112,
};
const filmTitle = document.createElement("h3");
filmTitle.textContent = film.title;
document.body.append(filmTitle);
console.log(filmTitle);
