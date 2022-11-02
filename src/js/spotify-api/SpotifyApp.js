const SPOTIFY_URL = "https://api.spotify.com/v1/";
const token =
  "BQCj2UprehHcCP54RecDFeYvffgGCeSbfdxwjC9gH7ZFu8D32mR_crZuwoNYqvrLmq0wlg6JIywatBJjUAj6WEoeVlHjvjyHX1QyWpeSV_EeupE0feE68DSVMt2wAxUSCU0_rFZGY_SYEZSAB_IMMno1zLeDM59paVx-DYo3bVWOPsy8BtvAGEBWl34kLcmTVQ9zCw";
const options = {
  method: "GET",
  headers: {
    Authorization: `Bearer ${token}`,
    Accept: "application/json",
    "Content-Type": "application/json",
  },
};
var items = {};

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
      items['categories'] = data.categories.items;
      drawCategories(items.categories);
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
      items['playlists']= data.playlists.items;
      drawPlaylists(items.playlists);
    })
    .catch((error) =>
      console.log(`[getPlaylists] Error petición  ${error.message}`)
    );
}

function playlistTracks(id) {
  const tracks = getData(`playlists/${id}/tracks`);
  tracks
    .then((data) => console.log(data))
    .catch((error) =>
      console.log(`[playlistTracks] Error petición  ${error.message}`)
    );
}
