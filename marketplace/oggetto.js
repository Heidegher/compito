const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");

async function getProductDetails() {
  const response = await fetch(
    `https://striveschool-api.herokuapp.com/api/product/${productId}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmNlMDcwNzY5NDA2YTAwMTUwZDk1OGIiLCJpYXQiOjE3MjQ3NzgyNDcsImV4cCI6MTcyNTk4Nzg0N30._8hZCFaIa9qdTZMGkr5SSG-4lIaOhU0nOFb5sid5Ms8",
      },
    }
  );

  const product = await response.json();

  const productDetails = document.getElementById("product-details");

  productDetails.innerHTML = `
                <div class="card">
                    <img src="${product.imageUrl}" class="card-img-top" alt="${product.name}">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">${product.description}</p>
                        <p class="card-text"><strong>Brand:</strong> ${product.brand}</p>
                        <p class="card-text"><strong>Price:</strong> €${product.price}</p>
                    </div>
                </div>
            `;
}

getProductDetails();
