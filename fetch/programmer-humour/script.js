const XKCD_API_URL = "https://xkcd.vercel.app/?comic=latest";
const LOADING_MESSAGE = "Data is fetching. Please wait."

const IMAGE_SECTION_ID = "image-section";
const IMAGE_HEADER_ID = "image-header";
const IMAGE_ELEMENT_ID = "image-img";

function fetchData() {
  renderWaitMessage();
  fetch(XKCD_API_URL)
    .then(response => response.json())
    .then(render)
    .catch(onFetchDataError);
}

function clearImageSection() {
  const imageSectionElement = document.getElementById(IMAGE_SECTION_ID);

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
  renderImageHeader(data);
  renderImage(data);
}

function renderImageHeader(data) {
  const imageHeaderElement = document.createElement("h1");
  
  imageHeaderElement.id = IMAGE_HEADER_ID;
  imageHeaderElement.textContent = data.title;

  const imageSectionElement = document.getElementById(IMAGE_SECTION_ID);

  imageSectionElement.appendChild(imageHeaderElement)
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