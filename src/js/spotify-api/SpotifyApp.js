const SPOTIFY_URL = "https://api.spotify.com/v1/";
const options = {
  method: "GET",
  headers: {
    Authorization:
      "Bearer BQAexMCWn7mNR5RNLPzV8uimtpZBjqsxFkfv8e3CTymh2kUu-VVwMUDdfQe_bLTN-PVHGoYLskkVli7rixICLu6Eyp1_KO3Fv_hSfBVEISSrhy_1ng-XbnXPtlHDqKd6agJx0u_zizZmv2HYX9qK_CBrVcraYnowUyeayTK0XQqWwvFTy26tjflbZ1c3ZsLdxNo",
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
      console.log(data);
      drawCategories(data);
    })
    .catch((error) => console.log(`[getUrl] Error petición  ${error.message}`));
}

function getArtists(param) {
  if ((param !== "") & (param !== undefined)) {
    getData(`artists/${param}`);
  } else {
    alert("Introduce un valor correcto.");
  }
}
