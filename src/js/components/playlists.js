function drawPlaylists(playlists) {
  if (document.getElementById("playlists") !== null) {
    playlists.forEach((element) => {
      cardPlaylists(element);
    });
  } else if (document.getElementById("home-playlists")) {
    var size;
    playlists.length >= 12 ? (size = 11) : (size = playlists.length - 1);
    let i = 0;
    for (i; i <= size; i++) {
      cardPlaylists(playlists[i]);
    }
  }
}

function cardPlaylists(playlist) {
  let name = playlist.name.split(" ").join("");
  let playlists = document.getElementsByClassName("container-playlists")[0];
  let card = document.createElement("div");
  /*   card.addEventListener("click", getCategory(category.id)); */
  let obj = {
    'name': 'playlist',
    'arr': 'playlists',
    'id' : playlist.id
  };
  card.setAttribute("onclick", `createArticle('${JSON.stringify(obj)}')`);
  card.classList.add(`${name}`);
  card.style.backgroundImage = `url(${playlist.images[0].url})`;
  playlists.appendChild(card);
}

