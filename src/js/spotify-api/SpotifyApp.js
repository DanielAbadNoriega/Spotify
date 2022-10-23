const SPOTIFY_URL = "https://api.spotify.com/v1/";

const options = {
  method: "GET",
  headers: {
    Authorization:
      "Bearer BQAVP6A0ta698shjV1puPkyu2cK-2x4a7pLpiC9OOJOYFw6tMkEsuWK4rRG9TQD4tAAIK2EUat-fgaeklcBAiM3NkRhWUfEc5-sxmNIsrWEZFwLq0Aim3nBM8oLUr_X8gGuknnCB1ixnLzIfLkdM2pYBCtEvL-HFK2yOXmCyKZRpOwvI8gNi0mW0rQziHWr6Bb0KOw",
    Accept: "application/json",
    "Content-Type": "application/json",
  },
};

function getArtists() {
  const url = `${SPOTIFY_URL}artists`;
  fetch("https://api.spotify.com/v1/artists/0r4YtlmJPQk1xhiVKHuPeF", options)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .then((data) => console.log(data))
    .catch((error) =>
      console.log("[getArtist] Error petición de artist: " + error.message)
    );
}

/* const headersSpotify = new Headers();

headersSpotify.append(
  "Authorization",
  "BQCdR7HALPcBEsj--EFtwmmGXJTdvGD2mcKff1Jvx6NlYVcxdQ9w8Uuc3r05FpICdxDYcr_JgH4tKxKjglgIbsSgLd_F5gb-DNCCoHrFdJZ2uZfLfemGLMpxXhSefSSjctYb-lNm-s__VqkVLdSL5_tKYpomsj_5obAyzG-mQbQusgZeJ5Tqp8GFyQAlc3c8q0GlOw"
);

headersSpotify.append("Accept", "application/json");

headersSpotify.append("Content-Type", "application/json; charset=utf-8"); 

var init = {
  method: "GET",
  headers: headersSpotify,
};
*/
