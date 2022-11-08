const SPOTIFY_URL = "https://api.spotify.com/v1/";
const client_id = "df4b47a457cf4f428704b7acb44cda65";
const client_secret = "b11d0ea217c349b5a41f84cf5f8b4695";
const token =
  "BQAXXgdMD59pRaKejciMrsvRFkJKm0UX3NDCFwbg_6v-xj9ejwryUAotD1fSFH5vkdo_WxMBl5RxXnSCXn-DvyISAboAobWQ2e4Efk9XjZ-Cn6Ptqu0qvaDV2VOJRq0vwycLpHI5fCQee_rpQRVkAQ8c4BcJD5yt-VQke2259mYg_lTG3H7sqotzy8TouzKuuSveKw";
const OPTIONS = {
  method: "GET",
  headers: {
    Authorization: `Bearer ${token}`,
    Accept: "application/json",
    "Content-Type": "application/json",
  },
};
var items = {};

async function getToken() {
  let params = new URLSearchParams(window.location.search);
  let code = params.get("code");

  const ACCESS_TOKEN_URL = "https://accounts.spotify.com/api/token";

  var body = {
    grant_type: "authorization_code",
    code: code,
    redirect_uri: "http://127.0.0.1:5500/index.html",
    client_id: client_id,
/*     code_verifier: code, */
  };

  var options_token = {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      Authorization: "Basic " + btoa(`${client_id} : ${client_secret}`),
      "Content-Type": "application/x-www-form-urlencoded",
    },
  };

  const res = await fetch(ACCESS_TOKEN_URL, options_token);
    res.then((res) => res.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
}

async function getData(param) {
  const res = await fetch(`${SPOTIFY_URL}${param}`, OPTIONS);
  if (res.ok) return res.json();
}

function getCategories() {
  const categories = getData("browse/categories?country=ES&offset=0&limit=50");
  categories
    .then((data) => {
      console.info("[getCategories] Data OK.");
      console.log(data);
      items["categories"] = data.categories.items;
      drawCategories(items.categories);
    })
    .catch((error) =>
      console.log(`[getCategory] Error petición  ${error.message}`)
    );
}

function getCategoryPlaylists(id) {
  const categoryPlaylists = getData(`browse/categories/${id}/playlists`);
  categoryPlaylists
    .then((data) => {
      console.log(`[getCategory] Category id: ${id}`);
      let category = items.categories.filter((category) => category.id == id);
      category[0]["playlists"] = data.playlists.items;
      drawCategory(category[0]);
    })
    .catch((error) =>
      console.error(`[getCategory] Error petición : ${error.message}`)
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
      let playlists = data.playlists.items.filter((item) => item !== null);
      items["playlists"] = playlists;
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
