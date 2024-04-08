import faker from "faker";

const mount = (el) => {
  let products = "";
  for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName(0);
    products += `<div>${name}</div>`;
  }

  console.log(products);
  el.innerHTML = products;
};

// Context/Situation #1
// We are Running this file in the development in isolation
// we are using our local index.html file
// which DEFNITELY has an element with an Id of "dev-products"
// We want to immediately render our application into that element
if (process.env.NODE_ENV === "development") {
    console.log(process.env.NODE_ENV, "Testing")
  const el = document.querySelector("#dev-products");
  // Assuming out Contaniner doesn't have an element
  // with id "dev-products"
  if (el) {
    // we are probably running in isolation mode
    mount(el);
  }
}

// Context/Situation #2
// we are Running the file in the in development in production
// though the CONTAINER app
// NO GUARANTEE that an element with an Id of "dev-products"
// WE DO NOT WANT Try to immediately render our application
export { mount };
