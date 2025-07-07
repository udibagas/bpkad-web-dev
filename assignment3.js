const products = JSON.parse(localStorage.getItem("products") || "[]");

document.addEventListener("DOMContentLoaded", () => {
  // 1. handle event listeners for the form submission
  // const form = document.querySelector("form");
  const form = document.querySelector("#product-form");
  console.log("Form element:", form);
  form.addEventListener("submit", handleFormSubmit);
  renderProducts();
});

function handleFormSubmit(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // 2. TODO: validate the form inputs

  console.log("Form submitted", event);
  // 3. get the form data
  const productName = event.target[0].value;
  const productStatus = event.target[1].value;
  const productPrice = event.target[2].valueAsNumber;

  const product = {
    id: Date.now(),
    name: productName,
    status: productStatus,
    price: productPrice,
  };

  console.log("Product object:", product);

  // 4. push ke products array
  products.push(product);

  // 5. save to localstorage
  localStorage.setItem("products", JSON.stringify(products));

  // 6. Reset the form fields
  event.target.reset();

  // 7. render the products
  renderProducts();
}

function renderProducts() {
  const productList = document.querySelector("#product-list");
  productList.innerHTML = ""; // Clear the existing product list

  products.forEach(async (product) => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    const json = await response.json();
    console.log(json);

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
        <strong>Title</strong>: ${json.title}
        <br />
        <strong>Description</strong>: ${json.body}
      </div>
    `;
  });
}
