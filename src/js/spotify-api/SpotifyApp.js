const SPOTIFY_URL = "https://api.spotify.com/v1/";

const headersSpotify = new Headers();

headersSpotify.append(
  "Authorization",
  "BQCdR7HALPcBEsj--EFtwmmGXJTdvGD2mcKff1Jvx6NlYVcxdQ9w8Uuc3r05FpICdxDYcr_JgH4tKxKjglgIbsSgLd_F5gb-DNCCoHrFdJZ2uZfLfemGLMpxXhSefSSjctYb-lNm-s__VqkVLdSL5_tKYpomsj_5obAyzG-mQbQusgZeJ5Tqp8GFyQAlc3c8q0GlOw"
);

headersSpotify.append("Accept" ,"application/json")

headersSpotify.append("Content-Type", "application/json; charset=utf-8");

var init = {
  method: "GET",
  headers: headersSpotify,
};

function getArtists() {
  const url = `${SPOTIFY_URL}artists`;
  fetch("https://api.spotify.com/v1/artists/0r4YtlmJPQk1xhiVKHuPeF", init)
    .then((res) => console.log(res))
    .catch((error) =>
      console.log("[getArtist] Error petición de artist: " + error.message)
    );
}
