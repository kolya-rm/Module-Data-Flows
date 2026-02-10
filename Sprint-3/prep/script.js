const state = {
  films: [
    {
      title: "Killing of Flower Moon",
      director: "Martin Scorsese",
      times: ["15:35"],
      certificate: "15",
      duration: 112,
    },
    {
      title: "Typist Artist Pirate King",
      director: "Carol Morley",
      times: ["15:00", "20:00"],
      certificate: "12A",
      duration: 108,
    },
  ],
  searchTerm: "pirate",
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

function render() {
  const filteredFilms = state.films.filter(
    (film) => film.title.toLowerCase().includes(state.searchTerm.toLowerCase())
  );
  const filmCards = filteredFilms.map(createFilmCard);
  const filmsSection = document.getElementById("films");

  filmsSection.textContent = "";
  filmsSection.append(...filmCards);
}

const searchBox = document.getElementById("q");
searchBox.addEventListener("input", handleSearchInput);

function handleSearchInput(event) {
  state.searchTerm = event.target.value;
  render();
}

const endpoint = "https://programming.codeyourfuture.io/dummy-apis/films.json";

const fetchFilms = async () => {
  const response = await fetch(endpoint);
  return await response.json();
}

fetchFilms().then((films) => {
  state.films = films;
  console.log(state);
  render();
}); 