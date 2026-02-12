const XKCD_API_URL = "https://xkcd.vercel.app/?comic=latest";
const LOADING_MESSAGE = "Data is fetching. Please wait."

function fetchData() {
  renderWaitMessage();
  fetch(XKCD_API_URL)
    .then(response => response.json())
    .then(render)
    .catch(onFetchDataError);
}

function clearImageSection() {
  const imageSectionElement = document.getElementById("image-section");

  imageSectionElement.textContent = "";

  return imageSectionElement;
}

function renderWaitMessage() {
  const loadingHeader = document.createElement("h1");

  loadingHeader.textContent = LOADING_MESSAGE;

  const imageSectionElement = clearImageSection();
  
  imageSectionElement.appendChild(loadingHeader);
}

function render(data) {
  clearImageSection();
  renderHeader(data);
  renderImage(data);
}

function renderHeader(data) {
  const headerElement = document.getElementById("image-header");
  const imageSectionElement = document.getElementById("image-section");

  headerElement.textContent = data.title;
}

function renderImage(data) {
  const imageElement = document.getElementById("image-img");
  imageElement.src = data.img;
  imageElement.alt = data.alt;
}

function onFetchDataError(error) {
  console.error(error);
  alert("Error: Failed to fetch data");
}

window.addEventListener("load", fetchData);