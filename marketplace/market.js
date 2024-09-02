async function call() {
  const response = await fetch(
    "https://striveschool-api.herokuapp.com/api/product/",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmNlMDcwNzY5NDA2YTAwMTUwZDk1OGIiLCJpYXQiOjE3MjQ3NzgyNDcsImV4cCI6MTcyNTk4Nzg0N30._8hZCFaIa9qdTZMGkr5SSG-4lIaOhU0nOFb5sid5Ms8",
      },
    }
  );

  const oggetto = await response.json();
  const target = document.getElementById("target");
  target.innerHTML = "";

  oggetto.forEach((o) => {
    const col = document.createElement("div");
    const card = document.createElement("div");
    const cardBody = document.createElement("div");
    const title = document.createElement("h5");
    const description = document.createElement("p");
    const brand = document.createElement("p");
    const price = document.createElement("p");
    const img = document.createElement("img");

    col.classList.add("col-6");
    card.classList.add("card","m-3");
    cardBody.classList.add("card-body", "w-50", "h-50");
    title.classList.add("card-title");
    description.classList.add("card-description");
    brand.classList.add("brand");
    price.classList.add("price");
    img.classList.add("img-fluid");

    title.textContent = o.name;
    description.textContent = o.description;
    brand.textContent = o.brand;
    price.textContent = `€${o.price}`;
    img.src = o.imageUrl;

    card.addEventListener("click", function () {
      window.location.href = "oggetto.html?id=" + o._id;
    });

    cardBody.append(img, title, description, brand, price);
    card.append(cardBody);
    col.append(card);
    target.append(col);
  });
}

call();
