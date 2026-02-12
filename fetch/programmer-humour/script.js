const XKCD_API_URL = "https://xkcd.vercel.app/?comic=latest";

window.load = fetchData();

function fetchData() {
  fetch(XKCD_API_URL)
    .then(response => response.json())
    .then(render)
    .catch(onFetchDataError);
}

function render(data) {
  renderHeader(data);
  renderImage(data);
}

function renderHeader(data) {
  const headerElement = document.getElementById("image-header");
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