import products from "./products.json" assert { type: "json" };
const content = document.querySelector(".left-bar");

for (let i = 0; i < products.length; i++) {
  let product = `
    <div class = "right">
      <div class= "cart">
          <div><img class= "image" src="images/${products[i].image}"></div>
      </div>
      <div class="text">
      Name: ${products[i].name}<br>
      Price: ${products[i].currency}${products[i].price}<br>
      </div>
      <div class="button">
      <button>Add to cart</button>
      </div>
    </div>
  `;
  content.innerHTML +=product;
}
