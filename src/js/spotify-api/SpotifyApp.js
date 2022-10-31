const SPOTIFY_URL = "https://api.spotify.com/v1/";
const options = {
  method: "GET",
  headers: {
    Authorization:
      "Bearer BQAx0E4gut-U6m47aE9GGv4fuYbThSI9I8V9ANHVGQe4ukknuRBymxvd92HdSHjKHMy_ZMJVpvGN0ltjFjtooD-uKmS6auAhSJgqNU66JrEcxLe3_pi3cyf1kdMbWIGFSg53EuTym-ytFU-o9YXHTZtEZ3mlFyUH15LAZQsLzJhVM5RWa86afJg_S403kl9YWIkhiw",
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
