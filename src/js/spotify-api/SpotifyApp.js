const SPOTIFY_URL = "https://api.spotify.com/v1/";
const options = {
  method: "GET",
  headers: {
    Authorization:
      "Bearer BQCjHNf-pIQEXbZ-8jOEcINUoynfpPnZYbZhlq7Ggk3PXgxpjZNs2dm9Y75SrC9MuURcVz1B78RFLfsCYjKKdSdKEJOzvu4vK0ynmHOwGbIKhpXJQUG8lwUJAhoOwYw87LzHkAClpTa6bLTgic_y5h1r7ovZAEPwNzjLBy8QWXpJ_k3yrtEVF2flYD88_WARlBsk0w",
    Accept: "application/json",
    "Content-Type": "application/json",
  },
};

async function getData(param) {
  const res = await fetch(`${SPOTIFY_URL}${param}`, options);
  if (res.ok) return res.json();
}

function getCategories() {
  const categories = getData("browse/categories?country=ES&offset=0&limit=50");
  categories
    .then((data) => {
      console.info("[getCategories] Data OK.");
      console.log(data);
      drawCategories(data);
    })
    .catch((error) => console.log(`[getCategory] Error petición  ${error.message}`));
}

function getCategory(id) {
  const category = getData(`browse/categories/${id}/playlists`);
  category.then((data) => {
    console.log(`[getCategory] Category id: ${id}`);
    drawCategory(data);
  })
  .catch(error => console.error(`[getCategory] Error petición ${error.message}`));
}

function getArtists(param) {
  if ((param !== "") & (param !== undefined)) {
    getData(`artists/${param}`);
  } else {
    alert("Introduce un valor correcto.");
  }
}
