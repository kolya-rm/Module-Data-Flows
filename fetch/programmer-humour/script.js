const XKCD_API_URL = "https://xkcd.vercel.app/?comic=latest";

window.load = fetchData();

function fetchData() {
  fetch(XKCD_API_URL)
    .then(response => response.json())
    .then(render)
    .catch(onFetchDataError);
}

function render(data) {
  console.log(data);
}

function onFetchDataError(error) {
  console.error(error);
  alert("Error: Failed to fetch data");
}