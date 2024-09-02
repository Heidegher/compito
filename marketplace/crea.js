const crea = document.getElementById("crea");

crea.addEventListener("click", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const description = document.getElementById("description").value;
  const brand = document.getElementById("brand").value;
  const price = document.getElementById("price").value;
  const imageUrl = document.getElementById("imageUrl").value;

  if (!name || !description || !brand || !price || !imageUrl) {
    alert("compila tutti i campi.");
    return;
  }

  const oggetto = {
    price: Number(price),
    brand: brand,
    name: name,
    description: description,
    imageUrl: imageUrl,
  };

  console.log(oggetto);

  call(oggetto);
});

async function call(oggetto) {
  const response = await fetch("https://striveschool-api.herokuapp.com/api/product/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmNlMDcwNzY5NDA2YTAwMTUwZDk1OGIiLCJpYXQiOjE3MjQ3NzgyNDcsImV4cCI6MTcyNTk4Nzg0N30._8hZCFaIa9qdTZMGkr5SSG-4lIaOhU0nOFb5sid5Ms8",
  
    },
    body: JSON.stringify(oggetto),
  })
  .then(response => {
    if (!response.ok) {
      throw new Error(`Errore nella richiesta: ${response.status}`);
    }
    return response.json();
  })
  .then(result => {
    console.log("Prodotto creato:", result);
    document.getElementById("name").value = "";
    document.getElementById("description").value = "";
    document.getElementById("brand").value = "";
    document.getElementById("price").value = "";
    document.getElementById("imageUrl").value = "";
    alert("Prodotto creato con successo!");
  })
  .catch(error => {
    console.error("Errore:", error);
    alert("Problema con la creazione del prodotto.");
  });
}


