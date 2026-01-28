const film = {
  title: "Killing of Flower Moon",
  director: "Martin Scorsese",
  times: ["15:35"],
  certificate: "15",
  duration: 112,
};

// function createChildElement(parentElement, tagName, textContent) {
//   const element = document.createElement(tagName);
//   element.textContent = textContent;
//   parentElement.append(element);
//   return element;
// }

// const card = document.createElement("section");

// createChildElement(card, "h3", film.title);

// createChildElement(card, "p", `Director  ${film.director}`);

// createChildElement(card, "time", `${film.duration} minutes`);

// createChildElement(card, "data", `Certificate: ${film.certificate}`);

const card = document.getElementById("film-card").content.cloneNode(true);

card.querySelector("h3").textContent = film.title;
card.querySelector("[data-director]").textContent = `Director  ${film.director}`;
card.querySelector("time").textContent = `${film.duration} minutes`;
card.querySelector("[data-certificate]").textContent = `Certificate: ${film.certificate}`;

document.body.append(card);