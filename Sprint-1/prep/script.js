const film = {
  title: "Killing of Flower Moon",
  director: "Martin Scorsese",
  times: ["15:35"],
  certificate: "15",
  duration: 112,
};

const template = document.getElementById("film-card");

function createFilmCard(film) {
  const card = template.content.cloneNode(true);

  card.querySelector("h3").textContent = film.title;
  card.querySelector("[data-director]").textContent = `Director  ${film.director}`;
  card.querySelector("time").textContent = `${film.duration} minutes`;
  card.querySelector("[data-certificate]").textContent = `Certificate: ${film.certificate}`;

  return card;
}

document.body.append(createFilmCard(film));