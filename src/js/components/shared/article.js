function createArticle(obj) {
  var item = JSON.parse(obj);
  let container = document.getElementsByClassName(
    `home-container-${item.name}`
  )[0]
    ? document.getElementsByClassName(`home-container-${item.name}`)[0]
    : document.getElementsByClassName(`${item.arr}-component-container`)[0];
  if (
    document.getElementsByClassName(`${item.name}-card`)[0] == undefined &&
    document.getElementById(item.id) == undefined
  ) {
    let article = document.createElement("article");
    article.classList.add("card-description");
    article.classList.add(`${item.name}-card`);
    article.setAttribute("id", item.id);

    let closeButton = document.createElement("button");
    closeButton.setAttribute("onclick", `closeCard('${item.name}')`);
    closeButton.innerHTML = '<i class="fa-solid fa-xmark"></i>';

    let title = document.createElement("h3");
    title.classList.add("card-title");
    title.classList.add(`${item.name}-title`);

    let img = document.createElement("img");
    img.classList.add("card-img");
    img.classList.add(`${item.name}-img`);

    let separator = document.createElement("hr");

    let articleBody = document.createElement("p");
    articleBody.classList.add("card-body");
    articleBody.classList.add(`${item.name}-body`);

    let linkButton = document.createElement("button");
    linkButton.classList.add("card-button");

    let link = document.createElement("a");
    link.classList.add("card-link");
    link.classList.add(`${item.name}-link`);
    link.setAttribute("target", "_blank");
    link.innerHTML = "Listen me";

    article.appendChild(closeButton);
    article.appendChild(title);
    article.appendChild(img);
    article.appendChild(separator);
    article.appendChild(articleBody);
    linkButton.appendChild(link);
    article.appendChild(linkButton);
    container.appendChild(article);

    cardDescription(item);
  } else if (document.getElementById(item.id) == undefined) {
    let article = document.getElementsByClassName(`${item.name}-card`)[0];
    article.setAttribute("id", item.id);
    closeCard(item.name);
    setTimeout(function () {
      cardDescription(item);
    }, 250);
  }
}

function cardDescription(obj) {
  let itemsArr = items[obj.arr];
  let item = itemsArr.find((item) => item.id == obj.id);
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

function closeCard(name) {
  let cardDescription = document.getElementsByClassName(`${name}-card`)[0];
  cardDescription.style.right = "-100vw";
}
