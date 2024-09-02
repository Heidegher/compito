async function fillForm() {
    const url = new URLSearchParams(location.search);
    const id = url.get("id");
  
    if (id) {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/product/${id}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmNlMDcwNzY5NDA2YTAwMTUwZDk1OGIiLCJpYXQiOjE3MjQ3NzgyNDcsImV4cCI6MTcyNTk4Nzg0N30._8hZCFaIa9qdTZMGkr5SSG-4lIaOhU0nOFb5sid5Ms8",
          },
        }
      );
      const dati = await response.json();
  

      document.getElementById("name").value = dati.name;
      document.getElementById("price").value = dati.price;
      document.getElementById("brand").value = dati.brand;
      document.getElementById("description").value = dati.description;
      document.getElementById("imageUrl").value = dati.imageUrl;
    } else {
      console.error("Nessun ID trovato nell'URL.");
    }
  }
  
  
  async function updateOggetto(e) {
    e.preventDefault();
  
    const name = document.getElementById("name").value;
    const description = document.getElementById("description").value;
    const brand = document.getElementById("brand").value;
    const price = document.getElementById("price").value;
    const imageUrl = document.getElementById("imageUrl").value;
    const url = new URLSearchParams(location.search);
    const id = url.get("id");
  
    if (!name || !description || !brand || !price || !imageUrl) {
      alert("Compila tutti i campi.");
      return;
    }
  
    const oggetto = {
      price: Number(price),
      brand: brand,
      name: name,
      description: description,
      imageUrl: imageUrl,
    };
  
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/product/${id}`,  
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmNlMDcwNzY5NDA2YTAwMTUwZDk1OGIiLCJpYXQiOjE3MjQ3NzgyNDcsImV4cCI6MTcyNTk4Nzg0N30._8hZCFaIa9qdTZMGkr5SSG-4lIaOhU0nOFb5sid5Ms8",
          },
          body: JSON.stringify(oggetto),
        }
      );
  
      if (!response.ok) {
        throw new Error(`Errore nella richiesta: ${response.status}`);
      }
  
      const result = await response.json();
      console.log("Prodotto aggiornato:", result);
      alert("Prodotto aggiornato con successo!");
  
    } catch (error) {
      console.error("Errore:", error);
      alert("C'è stato un problema con l'aggiornamento del prodotto.");
    }
  }
  

  const salva = document.getElementById("salva");
  salva.addEventListener("click", updateOggetto);
  
  
  fillForm();
  