function drawCategories(categories) {
  if (document.getElementById("categories") !== null) {
    categories.forEach((element) => {
      cardCategory(element);
    });
  } else if (document.getElementById("home-categories")) {
    var size;
    categories.length >= 12 ? (size = 11) : (size = categories.length - 1);
    let i = 0;
    for (i; i <= size; i++) {
      cardCategory(categories[i]);
    }
  }
}

function cardCategory(category) {
  let name = category.name.split(" ").join("");
  let categories = document.getElementsByClassName("container-categories")[0];
  let card = document.createElement("div");
  card.setAttribute("onclick", `getCategoryPlaylists('${category.id}')`);
  card.classList.add(`${name}`);
  card.style.backgroundImage = `url(${category.icons[0].url})`;
  categories.appendChild(card);
}

function drawCategory(category) {
  let obj = {
    name: "category",
    arr: "categories-arr",
    id: category.id,
  };
  console.log(category);
  let playlists = category.playlists.filter( playlist => playlist !== null);
  playlists.forEach((playlist, index) => {
    if (playlist !== null) {
      obj["playlist"] = playlist;
      obj["index"] = index;
      createArticle(obj);
    } 
  });
}
