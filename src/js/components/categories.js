var categoriesArr;

function drawCategories(data) {
/*   console.log(`Categories: ${JSON.stringify(data.categories)}`); */
  categoriesArr = data.categories.items;
  for (let i = 0; i <= 11; i++) {
    cardCategory(categoriesArr[i]);
  }
}

function cardCategory(category) {
  let categories = document.getElementById("categories");
  let card = document.createElement("div");
  card.setAttribute("id", category.id);
  card.style.backgroundImage = `url(${category.icons[0].url})`;
  categories.appendChild(card);
}
