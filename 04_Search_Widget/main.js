const search_button = document.getElementById("search_button");
const search_input = document.getElementById("search_input");
const search_container = document.getElementById("search_container");

search_button.addEventListener("click", (e) => {
  search_container.classList.toggle("active");
});
