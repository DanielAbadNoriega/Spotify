var categoriesArr;

function drawCategories(data) {
  /*   console.log(`Categories: ${JSON.stringify(data.categories)}`); */
  categoriesArr = data.categories.items;
  if (document.getElementById("categories") !== null) {
    categoriesArr.forEach((element) => {
      cardCategory(element);
    });
  } else if (document.getElementById("home-categories")) {
    for (let i = 0; i <= 11; i++) {
      cardCategory(categoriesArr[i]);
    }
  }
}

function cardCategory(category) {
  let name = category.name.split(" ").join("");
  let categories = document.getElementsByClassName("container-categories")[0];
  let card = document.createElement("div");
/*   card.addEventListener("click", getCategory(category.id)); */
  card.setAttribute("onclick", `getCategory('${category.id}')`);
  card.classList.add(`${name}`);
  card.setAttribute("id", category.id);
  card.style.backgroundImage = `url(${category.icons[0].url})`;
  categories.appendChild(card);
}

function drawCategory(elem) {
  console.log(elem);
}
