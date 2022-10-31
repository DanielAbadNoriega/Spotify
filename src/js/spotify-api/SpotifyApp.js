const SPOTIFY_URL = "https://api.spotify.com/v1/";
const options = {
  method: "GET",
  headers: {
    Authorization:
      "Bearer BQC1-UCuuWYDV8Q3Yo16upsJwtUaj1tQmvmO07GSHPf-Au-K8e8HNtRUa4GttMWxKmvj_TNkjhOb3gCegZw5ARYkk_bA3jztkxcM60kG2TMvnUyC5tWvw2kofObXWnAb75-TSYo4iQLN6gi0fzC808Utm5p0_2_v4AaonDhIGzZIgi1cR5IGsGmD6t0h8NKg-taY5Q",
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
    .catch((error) =>
      console.log(`[getCategory] Error petición  ${error.message}`)
    );
}

function getCategory(id) {
  const category = getData(`browse/categories/${id}/playlists`);
  category
    .then((data) => {
      console.log(`[getCategory] Category id: ${id}`);
      drawCategory(data);
    })
    .catch((error) =>
      console.error(`[getCategory] Error petición ${error.message}`)
    );
}

function getArtists(param) {
  if ((param !== "") & (param !== undefined)) {
    getData(`artists/${param}`);
  } else {
    alert("Introduce un valor correcto.");
  }
}

function getPlaylists() {
  const playlists = getData("browse/featured-playlists?limit=20");
  playlists
    .then((data) => {
      console.info("[getPlaylists] Data OK.");
      console.log(data);
      drawPlaylists(data);
    })
    .catch((error) =>
      console.log(`[getPlaylists] Error petición  ${error.message}`)
    );
}
