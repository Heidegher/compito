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
    const a = document.createElement("a");
    const brand = document.createElement("p");
    const price = document.createElement("p");
    const img = document.createElement("img");
    const deleteButton = document.createElement("button");
    const editButton = document.createElement("a");

    col.classList.add("col-6");
    card.classList.add("card","m-3");
    cardBody.classList.add("card-body", "w-50", "h-50",);
    title.classList.add("card-title");
    description.classList.add("card-descripition");
    a.classList.add("btn", "btn-primary", "m-1");
    brand.classList.add("brand");
    price.classList.add("price");
    img.classList.add("img-fluid");
    deleteButton.classList.add("btn", "btn-danger" , "m-1");
    editButton.classList.add("btn", "btn-success", "m-1");


    title.textContent = o.name;
    description.textContent = o.description;
    brand.textContent = o.brand;
    price.textContent = `€${o.price}`;
    img.src = o.imageUrl;
    a.innerText = "visualizza";
    a.href = "prodotti.html?id=" + o._id;
    deleteButton.innerText = "Elimina";
    editButton.innerText="Modifica";
    editButton.href= "modifica.html?id=" + o._id;

    deleteButton.addEventListener("click", function () {
      fetch("https://striveschool-api.herokuapp.com/api/product/" + o._id, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmNlMDcwNzY5NDA2YTAwMTUwZDk1OGIiLCJpYXQiOjE3MjQ3NzgyNDcsImV4cCI6MTcyNTk4Nzg0N30._8hZCFaIa9qdTZMGkr5SSG-4lIaOhU0nOFb5sid5Ms8",
        },
      })
        .then((res) => res.json())
        .then(() => {
          col.remove();
        })

        .catch((error) => {
          console.error("Errore:", error);
          alert("Errore durante l'eliminazione del prodotto.");
        });
    });

    cardBody.append(img, title, description, brand, price, a, deleteButton,editButton);
    card.append(cardBody);
    col.append(card);
    target.append(col);
  });
  
}

call();
