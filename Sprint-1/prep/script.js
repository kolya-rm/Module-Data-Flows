const film = {
  title: "Killing of Flower Moon",
  director: "Martin Scorsese",
  times: ["15:35"],
  certificate: "15",
  duration: 112,
};

const template = document.getElementById("film-card");

function createFilmCard({title, director, duration, certificate}) {
  const card = template.content.cloneNode(true);

  card.querySelector("h3").textContent = title;
  card.querySelector("[data-director]").textContent = `Director  ${director}`;
  card.querySelector("time").textContent = `${duration} minutes`;
  card.querySelector("[data-certificate]").textContent = `Certificate: ${certificate}`;

  return card;
}

document.body.append(createFilmCard(film));