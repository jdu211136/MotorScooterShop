import products from "./products.json" assert { type: "json" };
const content = document.querySelector("#content");

for (let i = 0; i < products.length; i++) {
  const product = document.createElement("div");
  product.innerHTML = `
    <img src="images/${products[i].image}"><br>
    Name: ${products[i].name}<br>
    Price: ${products[i].currency}${products[i].price}<br>
    `;
  content.append(product);
}
