const SPOTIFY_URL = "https://api.spotify.com/v1/";
const token =
  "BQBOHZdxZfM6DobLCpGBC0erQsKdyFMV43ojeZVTMaAcZytBmNCXpNERC1GaeC2R70TVBo3s2Z4CBTFhgVK4R1iyD5_Zqs_rCprTDuHQ4x4QQhGkJLyR8S9Pw-F-l9LmGbVQjgnHaGjVSLmruDzg8Wcc4ARB0xKk6p8imoSfsZXMAQInTfipX3vilzlmccwPCKaGoQ";
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

function getCategoryPlaylists(id) {
  const categoryPlaylists = getData(`browse/categories/${id}/playlists`);
  categoryPlaylists
    .then((data) => {
      console.log(`[getCategory] Category id: ${id}`);
      let category = items.categories.filter(category => category.id == id);
      category[0]['playlists'] = data.playlists.items;
      drawCategory(category[0]);
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
