const XKCD_API_URL = "https://xkcd.vercel.app/?comic=latest";

const LOADING_MESSAGE = "Data is fetching. Please wait.";
const FETCHING_DATA_ERROR_MESSAGE = "Error: Failed to fetch data";

const IMAGE_SECTION_ID = "image-section";
const IMAGE_HEADER_ID = "image-header";
const IMAGE_ELEMENT_ID = "image-img";


function fetchData() {
  renderWaitMessage();
  fetch(XKCD_API_URL)
    .then(response => response.json())
    .then(onFetchDataOK)
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

function onFetchDataOK(data) {
  console.log(data);
  render(data);
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
  const imageElement = document.createElement("img");
  imageElement.id = IMAGE_ELEMENT_ID;
  imageElement.src = data.img;
  imageElement.alt = data.alt;

  const imageSectionElement = document.getElementById(IMAGE_SECTION_ID);

  imageSectionElement.appendChild(imageElement);
}

function onFetchDataError(error) {
  console.error(error);
  alert(FETCHING_DATA_ERROR_MESSAGE);
}


window.addEventListener("load", fetchData);