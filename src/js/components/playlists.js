var playlistsArr;

function drawPlaylists(data) {
  playlistsArr = data.playlists.items;
  if (document.getElementById("playlists") !== null) {
    playlistsArr.forEach((element) => {
      cardPlaylists(element);
    });
  } else if (document.getElementById("home-playlists")) {
    var size;
    playlistsArr.length >= 12 ? (size = 11) : (size = playlistsArr.length-1);
    let i = 0;
    for (i; i <= size; i++) {
      cardPlaylists(playlistsArr[i])
    }
  }
}

function cardPlaylists(playlist){
  let name = playlist.name.split(" ").join("");
  let playlists = document.getElementsByClassName("container-playlists")[0];
  let card = document.createElement("div");
/*   card.addEventListener("click", getCategory(category.id)); */
  card.setAttribute("onclick", `getCategory('${playlist.id}')`);
  card.classList.add(`${name}`);
  card.setAttribute("id", playlist.id);
  card.style.backgroundImage = `url(${playlist.images[0].url})`;
  playlists.appendChild(card);
}
