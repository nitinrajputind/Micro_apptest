import facker from "faker";

const mount = (el) => {
  const cartText = `
    <br />
    <div>Nitin Rajput </div>
    <hr />
    <div>Yo are ${facker.random.number()} in your cart</div>`;

  el.innerHTML = cartText;
};

if (process.env.NODE_ENV === "development") {
    console.log(process.env.NODE_ENV, "Testing")
  const el = document.querySelector("#dev-cart");
  // Assuming out Contaniner doesn't have an element
  // with id "dev-products"
  if (el) {
    // we are probably running in isolation mode
    mount(el);
  }
}

export { mount };
