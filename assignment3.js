const products = JSON.parse(localStorage.getItem("products") || "[]");

document.addEventListener("DOMContentLoaded", () => {
  // 1. handle event listeners for the form submission
  // const form = document.querySelector("form");
  const form = document.querySelector("#product-form");
  console.log("Form element:", form);
  form.addEventListener("submit", handleFormSubmit);
  renderProducts();
});

async function handleFormSubmit(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // 2. TODO: validate the form inputs

  console.log("Form submitted", event);
  // 3. get the form data
  const productName = event.target[0].value;
  const productStatus = event.target[1].value;
  const productPrice = event.target[2].valueAsNumber;

  // 4. Fetch additional data from an API
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }

    const json = await response.json();

    const product = {
      id: Date.now(),
      name: productName,
      status: productStatus,
      price: productPrice,
      title: json.title,
      description: json.body,
    };

    console.log("Product object:", product);

    // 5. push ke products array
    products.push(product);

    // 6. save to localstorage
    localStorage.setItem("products", JSON.stringify(products));

    // 7. Reset the form fields
    event.target.reset();

    // 8. render the products
    renderProducts();
  } catch (error) {
    console.log("Error fetching data from API:", error);
  }
}

function renderProducts() {
  const productList = document.querySelector("#product-list");
  productList.innerHTML = ""; // Clear the existing product list

  products.forEach((product) => {
    productList.innerHTML += `
      <div class="m-3 border p-4 rounded shadow">
        <h3>${product.name}</h3>
        <img
          src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
          alt=""
          class="img-fluid mb-3"
          style="width: 200px; height: auto"
        />
        <div class="${
          product.status == "In Stock" ? "text-success" : "text-danger"
        }">${product.status}</div>
        <div>${product.price.toLocaleString("id-ID", {
          style: "currency",
          currency: "IDR",
        })}</div>

        <h6 class="mt-4">Additional Info from API</h6>
        <hr />
        <strong>Title</strong>: ${product.title}
        <br />
        <strong>Description</strong>: ${product.description}
      </div>
    `;
  });
}
