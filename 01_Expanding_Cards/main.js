const cards = document.querySelectorAll(".card");

console.log(cards);

cards.forEach(card => {
  card.addEventListener("click", toggleActiveClass);
})

function toggleActiveClass() {
  removeAllActiveClasses(cards);
  this.classList.add("active");
}

function removeAllActiveClasses(NodeList) {
  NodeList.forEach(node => node.classList.remove("active"));
}