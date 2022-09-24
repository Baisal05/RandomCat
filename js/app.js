const btn = document.querySelector(".btn");
const img = document.querySelector(".img");
const url =
  "https://random.imagecdn.app/v1/image?width=500&height=500&category=buildings&format=json";

async function fetchHendler() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    img.src = data.url;
  } catch (error) {
    console.log(error);
  }
}
btn.addEventListener("click", () => {
  let load = img.complete;

  if (load) {
    fetchHendler();
  }
});
