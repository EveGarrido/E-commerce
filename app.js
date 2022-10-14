const plusFifthBrother = document.querySelector(".plus-fifth-brother");
const plusReva = document.querySelector(".plus-reva");
const plusVader = document.querySelector(".plus-vader");
const pluskenobi = document.querySelector(".plus-kenobi");
const plusAnakin = document.querySelector(".plus-anakin");
const plusAhsoka = document.querySelector(".plus-ahsoka");
const plusWolffe = document.querySelector(".plus-wolffe");
const plusShockTrooper = document.querySelector(".plus-shock-trooper");
const plusJetTrooper = document.querySelector(".plus-jet-trooper");
const cart = document.querySelector(".cart");
const itemTotal = document.querySelector(".items-total");
const pay = document.querySelector(".pay");
const closeCart = document.querySelector(".close-cart");
const btnCart = document.querySelector(".btn-cart");
const showAll = document.querySelector(".show-all-products");
const showDark = document.querySelector(".show-dark-side");
const showJedis = document.querySelector(".show-jedis");
const showClones = document.querySelector(".show-clones");
const dark = document.querySelector("#dark");
const jedi = document.querySelector("#jedi");
const clone = document.querySelector("#clone");
const cartPop = document.querySelector(".cart-pop");

let cartProducts = [];
let idCounter = 0;
let quantityProduct = 1;

plusFifthBrother.addEventListener("click", (e) =>{
  createArrayWithProducts(plusFifthBrother);
  createProduct();
  idCounter++;
  createTotalPrice();
  localStorage.setItem("product", JSON.stringify(cartProducts));
});

plusReva.addEventListener("click", (e) =>{
  createArrayWithProducts(plusReva);
  createProduct();
  idCounter++;
  createTotalPrice();
  localStorage.setItem("product", JSON.stringify(cartProducts));
});

plusVader.addEventListener("click", (e) =>{
  createArrayWithProducts(plusVader);
  createProduct();
  idCounter++;
  createTotalPrice();
  localStorage.setItem("product", JSON.stringify(cartProducts));
});

pluskenobi.addEventListener("click", (e) =>{
  createArrayWithProducts(pluskenobi);
  createProduct();
  idCounter++;
  createTotalPrice();
  localStorage.setItem("product", JSON.stringify(cartProducts));
});

plusAnakin.addEventListener("click", (e) =>{
  createArrayWithProducts(plusAnakin);
  createProduct();
  idCounter++;
  createTotalPrice();
  localStorage.setItem("product", JSON.stringify(cartProducts));
});

plusAhsoka.addEventListener("click", (e) =>{
  createArrayWithProducts(plusAhsoka);
  createProduct();
  idCounter++;
  createTotalPrice();
  localStorage.setItem("product", JSON.stringify(cartProducts));
});

plusWolffe.addEventListener("click", (e) =>{
  createArrayWithProducts(plusWolffe);
  createProduct();
  idCounter++;
  createTotalPrice();
  localStorage.setItem("product", JSON.stringify(cartProducts));
});

plusShockTrooper.addEventListener("click", (e) =>{
  createArrayWithProducts(plusShockTrooper);
  createProduct();
  idCounter++;
  createTotalPrice();
  localStorage.setItem("product", JSON.stringify(cartProducts));
});

plusJetTrooper.addEventListener("click", (e) =>{
  createArrayWithProducts(plusJetTrooper);
  createProduct();
  idCounter++;
  createTotalPrice();
  localStorage.setItem("product", JSON.stringify(cartProducts));
});

//crea arreglo con articulos//
function createArrayWithProducts (element) {
  const image = element.parentElement.previousElementSibling.firstElementChild.src;
  const stock = element.previousElementSibling.previousElementSibling.previousElementSibling.textContent;
  const price = element.previousElementSibling.previousElementSibling.textContent;
  const name = element.previousElementSibling.textContent;
  const id = idCounter;
  const quantity = quantityProduct; 
  //validar si ya exite el producto//
  cartProducts.push({image, stock, price, name, id, quantity});
}

//Pinta arreglo con articulos agregados//
function createProduct () {
  const elements = cartProducts.map((product, i)=>{
    return `
    <article class="container-cart">
      <div class="box-cart">
      <img class="image-cart" src="${cartProducts[i].image}" alt="Fifth brother"> 
      </div>
      <div class="box-cart">
        <p class="stock detail-product-cart">${cartProducts[i].stock}</p>
        <p class="price detail-product-cart">${cartProducts[i].price}</p>
        <p class="subtotal detail-product-cart">${cartProducts[i].quantity * cartProducts[i].price}</p>
        <h3>${cartProducts[i].name}</h3>
      </div>
      <div class="box-cart quantify">
        <span class="material-symbols-outlined minus">remove</span>
        <p class="units">${cartProducts[i].quantity}</p>
        <span class="material-symbols-outlined plus">add</span>
      </div> 
      <div class="box-cart">
        <span class="material-symbols-outlined btn-delete" id=${cartProducts[i].id}>delete</span>
      </div>
    </article>`
  });
  cart.innerHTML = elements.join("");
};

//Elimina un producto del arreglo//
cart.addEventListener("click" , (e)=>{
  if (e.target.classList.contains("btn-delete")) {
    const idProduct = e.target.getAttribute("id");
    const newcart = cartProducts.filter((product) => product.id !== Number(idProduct));
    cartProducts = [...newcart];
    createProduct();
    createTotalPrice();
    localStorage.setItem("products", JSON.stringify(cartProducts));
  }  
});

//total items y total del carrito//
function createTotalPrice() {
  const productPrice = cartProducts.map((product, i)=>{
    return Number(cartProducts[i].price);
  });
  itemTotal.innerHTML = `<div class="total">
                        <p>${cartProducts.length} Items</p>
                        </div>
                        <div class="total">
                        <p>TOTAL US$ ${productPrice.reduce((a, b) => a+b, 0)}</p>
                        </div>`
};

//botones carrito//
pay.addEventListener("click", (e)=>{
  cartPop.style.visibility = "hidden";
});

closeCart.addEventListener("click", (e)=>{
  cartPop.style.visibility = "hidden";
});

btnCart.addEventListener("click", (e)=>{
  cartPop.style.visibility = "visible";
});

//botones por grupo//
showAll.addEventListener("click", (e)=>{
  dark.style.visibility = "visible";
  jedi.style.visibility = "visible";
  clone.style.visibility = "visible";
});

showDark.addEventListener("click", (e)=>{
  dark.style.visibility = "visible";
  jedi.style.visibility = "hidden";
  clone.style.visibility = "hidden";
});

showJedis.addEventListener("click", (e)=>{
  dark.style.visibility = "hidden";
  jedi.style.visibility = "visible";
  clone.style.visibility = "hidden";
});

showClones.addEventListener("click", (e)=>{
  dark.style.visibility = "hidden";
  jedi.style.visibility = "hidden";
  clone.style.visibility = "visible";
});