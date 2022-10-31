const SPOTIFY_URL = "https://api.spotify.com/v1/";
const token =
  "BQAbx0O3xMs587J3XQLhKzSDrPUipqKYYQxeRaOkzNWykks12-Dzw_PZk0UeUPGIRdtECRt-D4jwzhrCkTzzroZTDd_v_DgI0MaUJs0Y7kweesFpaAOWekbrDQQVkP_EgUda8vHWS0BOpDWYeQMKBHlKweANX65rYTT2HAsvpg7IT4JzVURaCsqCfpR9MjuG5JQ2Ag";
const options = {
  method: "GET",
  headers: {
    Authorization: `Bearer ${token}`,
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

function playlistTracks(id) {
  const tracks = getData(`playlists/${id}/tracks`);
  tracks
    .then((data) => console.log(data))
    .catch((error) =>
      console.log(`[playlistTracks] Error petición  ${error.message}`)
    );
}
