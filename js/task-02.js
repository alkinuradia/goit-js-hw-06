const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
 const list = document.querySelector("#ingredients");
 const listItemsArray = [];
 ingredients.forEach((ingredient) => {
  const listItem =document.createElement("li");
  listItem.textContent = ingredient;
  listItem.classList.add("item");
  listItemsArray.push(listItem);
 });
 list.append(...listItemsArray);