function createArticle(obj) {
  var item;
  typeof obj == "string" ? (item = JSON.parse(obj)) : (item = obj);

  let container = document.getElementsByClassName(
    `home-container-${item.arr}`
  )[0]
    ? document.getElementsByClassName(`home-container-${item.arr}`)[0]
    : document.getElementsByClassName(`${item.arr}-component-container`)[0];

  switch (item.name) {
    case "playlist":
      checkPlaylist(item, container);
      break;
    case "category":
      checkCategory(item, container);
      break;
  }
}

function checkPlaylist(item, container) {
  if (
    document.getElementsByClassName(`${item.name}-card`)[0] == undefined &&
    document.getElementById(item.id) == undefined
  ) {
    newArticle(item, container);
    cardDescriptionPlaylist(item);
  } else if (document.getElementById(item.id) == undefined) {
    let article = document.getElementsByClassName(`${item.name}-card`)[0];
    article.setAttribute("id", item.id);
    closeCard(item.name);
    setTimeout(function () {
      cardDescriptionPlaylist(item);
    }, 300);
  }
}

function checkCategory(item, container) {
  if (document.getElementById(item.id) == undefined) {
    closeCategories();
    container.setAttribute("id", item.id);
    var categoryCards = document.getElementsByClassName("category-card");
    if (
      categoryCards.length > 0 &&
      !categoryCards[0].getAttribute("class").includes(item.id)
    ) {
      var totalCards = categoryCards.length;
      var i = 0;
      for (i; i < totalCards; i++) {
        container.removeChild(categoryCards[0]);
      }
    }
  }
  setTimeout(() => (container.style.right = "0px"), 200);
  if (
    document.getElementById(`${item.playlist.id}-${item.index}`) == undefined
  ) {
    let containerCategoriesPlaylists = document.getElementsByClassName("home-container-categories-playlists")[0]; 
    newArticle(item, containerCategoriesPlaylists);
    cardDescriptionCategory(item);
  }
}

function newArticle(item, container) {
  let article = document.createElement("article");
  let id = item.name !== "category" ? item.id : item.playlist.id;
  article.classList.add("card-description");
  article.classList.add(`${item.name}-card`);
  article.setAttribute("id", `${id}-${item.index}`);

  if (item.name == "playlist") {
    var closeButton = document.createElement("button");
    closeButton.setAttribute("onclick", `closeCard('${item.name}')`);
    closeButton.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    article.appendChild(closeButton);
  } else {
    var closeButton = document.getElementsByClassName("close-button")[0];
    closeButton.setAttribute("onclick", `closeCategories('${item.id}')`);
  }

  let title = document.createElement("h3");
  title.classList.add("card-title");
  title.classList.add(`${item.name}-title`);
  title.setAttribute("id", `${id}-title`);

  let img = document.createElement("img");
  img.classList.add("card-img");
  img.classList.add(`${item.name}-img`);
  img.setAttribute("id", `${id}-img`);

  let separator = document.createElement("hr");

  let articleBody = document.createElement("p");
  articleBody.classList.add("card-body");
  articleBody.classList.add(`${item.name}-body`);
  articleBody.setAttribute("id", `${id}-body`);

  let linkButton = document.createElement("button");
  linkButton.classList.add("card-button");

  let link = document.createElement("a");
  link.classList.add("card-link");
  link.classList.add(`${item.name}-link`);
  link.setAttribute("target", "_blank");
  link.setAttribute("id", `${id}-link`);
  link.innerHTML = "Listen me";

  article.appendChild(title);
  article.appendChild(img);
  article.appendChild(separator);
  article.appendChild(articleBody);
  linkButton.appendChild(link);
  article.appendChild(linkButton);
  container.appendChild(article);
}

function cardDescriptionPlaylist(obj) {
  let itemsArr = items[obj.arr];
  var item = itemsArr.find((item) => item.id == obj.id);
  let cardDescription = document.getElementsByClassName(`${obj.name}-card`)[0];
  let title = document.getElementsByClassName(`${obj.name}-title`)[0];
  let portrait = document.getElementsByClassName(`${obj.name}-img`)[0];
  let description = document.getElementsByClassName(`${obj.name}-body`)[0];
  let tracks = document.getElementsByClassName(`${obj.name}-link`)[0];
  title.innerHTML = `${item.name}`;
  portrait.setAttribute("src", item.images[0].url);
  description.innerHTML = `${item.description}`;
  tracks.setAttribute("href", item.external_urls.spotify);
  setTimeout(() => (cardDescription.style.right = "2vw"), 100);
}

function cardDescriptionCategory(obj) {
  var item = obj.playlist;
  let categoryCard = document.getElementsByClassName(`${obj.name}-card`)[
    obj.index
  ];
  categoryCard.classList.add(`${obj.id}`);
  let title = document.getElementById(`${item.id}-title`);
  let portrait = document.getElementById(`${item.id}-img`);
  let description = document.getElementById(`${item.id}-body`);
  let tracks = document.getElementById(`${item.id}-link`);
  title.innerHTML = `${item.name}`;
  portrait.setAttribute("src", item.images[0].url);
  description.innerHTML = `${item.description}`;
  tracks.setAttribute("href", item.external_urls.spotify);
}

function closeCard(name) {
  let cardDescription = document.getElementsByClassName(`${name}-card`)[0];
  cardDescription.style.right = "-100vw";
}

function closeCategories() {
  let categories = document.getElementsByClassName(
    "home-container-categories-arr"
  )[0];
  categories.style.right = "-100vw";
}
