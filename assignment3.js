const products = JSON.parse(localStorage.getItem("products") || "[]");

// 1. handle event listeners for the form submission
// const form = document.querySelector("form");
const form = document.querySelector("#product-form");
console.log("Form element:", form);
form.addEventListener("submit", handleFormSubmit);
renderProducts();

const stockStatus = document.querySelector("#stock-status");

stockStatus.addEventListener("change", (event) => {
  const status = event.target.value;

  if (status === "Out of Stock") {
    document.querySelector("#product-stock").disabled = true;
    document.querySelector("#product-stock").value = 0;
  } else {
    document.querySelector("#product-stock").disabled = false;
  }
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
    saveProducts();

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

        <div>
        <button class="btn btn-danger" onclick="deleteProduct(${product.id})">
        Delete
        </button>

        <button class="btn btn-success" onclick="editProduct(${product.id})">
        Edit
        </button>
        </div>
      </div>
    `;
  });
}

function deleteProduct(id) {
  const indexProduct = products.findIndex((p) => p.id === id);
  if (indexProduct === -1) {
    console.log("Product not found");
    return;
  }

  products.splice(indexProduct, 1);
  saveProducts();
  renderProducts();
}

function editProduct(id) {
  // 1. Get product by id
  const product = products.find((p) => p.id === id);
  if (!product) {
    console.log("Product not found");
    return;
  }

  // 2. populate form based on product object
  document.querySelector("#product-name").value = product.name;
  document.querySelector("#product-price").value = product.price;
  document.querySelector("#stock-status").value = product.status;

  const submitBtnEl = document.querySelector("#update-button");
  submitBtnEl.classList.remove("d-none");
  document.querySelector("#submit-button").classList.add("d-none");

  submitBtnEl.removeEventListener("click", () => updateProduct(id));
  submitBtnEl.addEventListener("click", () => updateProduct(id));
}

function updateProduct(id) {
  const product = products.find((p) => p.id === id);
  if (!product) {
    console.log("Product not found");
    return;
  }

  product.name = document.querySelector("#product-name").value;
  product.price = document.querySelector("#product-price").valueAsNumber;
  product.status = document.querySelector("#stock-status").value;

  renderProducts();
  saveProducts();
}

function saveProducts() {
  localStorage.setItem("products", JSON.stringify(products));
}
