function displayMovies(order) {
  if (order === "az") {
    movies.sort((a, b) => a.Title.localeCompare(b.Title));
  } else if (order === "za") {
    movies.sort((a, b) => b.Title.localeCompare(a.Title));
  }

  const cardParent = document.querySelector(".card-parent");
  cardParent.innerHTML = "";

  movies.forEach(item => {
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card");

    const defaultImage = "./image.png"; 

    cardDiv.innerHTML = `
      <img src="${defaultImage}" alt="${item.Title}" />
      <h3>${item.Title}</h3>
      <p>${item.Year}</p>
      <button class="more-info">More info</button>
    `;

    cardParent.appendChild(cardDiv);
  });
}

document.getElementById("sort").addEventListener("change", function () {
  displayMovies(this.value);
});

displayMovies("az");

function searchMovies() {
  let searchValue = document.getElementById("search").value.toLowerCase();
  let filteredMovies = movies.filter(movie => 
    movie.Title.toLowerCase().includes(searchValue)
  );
  
  displayFilteredMovies(filteredMovies);
}

document.getElementById("search").addEventListener("input", searchMovies);
document.getElementById("search-btn").addEventListener("click", searchMovies);

function displayFilteredMovies(filteredList) {
  const cardParent = document.querySelector(".card-parent");
  cardParent.innerHTML = "";

  filteredList.forEach(item => {
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card");

    const defaultImage = "./image.png"; 

    cardDiv.innerHTML = `
      <img src="${defaultImage}" alt="${item.Title}" />
      <h3>${item.Title}</h3>
      <p>${item.Year}</p>
      <button class="more-info">More info</button>
    `;

    cardParent.appendChild(cardDiv);
  });
}
