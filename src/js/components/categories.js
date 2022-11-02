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
  card.setAttribute("onclick", `getCategory('${category.id}')`);
  card.classList.add(`${name}`);
  card.setAttribute("id", category.id);
  card.style.backgroundImage = `url(${category.icons[0].url})`;
  categories.appendChild(card);
}

function drawCategory(elem) {
  console.log(elem);
}
