// -- JAVASCRIPT CAFE! -- //

// -- Products -- //

let Products = {
  coffee: {
    stock: 10,
    price: 4,
  },

  tea: {
    stock: 8,
    price: 3,
  },

  milkshake: {
    stock: 4,
    price: 8,
  },

  hotchocolate: {
    stock: 6,
    price: 6,
  },

  eggs: {
    stock: 7,
    price: 7.5,
  },

  salmon: {
    stock: 3,
    price: 15.3,
  },

  toast: {
    stock: 9,
    price: 10.2,
  },
}

function displayProducts() {
  document.getElementById('coffee').innerHTML =
    'Coffee: ' +
    Products.coffee.stock +
    ', $' +
    Products.coffee.price +
    ' per item'

  document.getElementById('tea').innerHTML =
    'Tea: ' + Products.tea.stock + ', $' + Products.tea.price + ' per item'

  document.getElementById('milkshake').innerHTML =
    'Milkshake: ' +
    Products.milkshake.stock +
    ', $' +
    Products.milkshake.price +
    ' per item'

  document.getElementById('hotchocolate').innerHTML =
    'Hot Chocolate: ' +
    Products.hotchocolate.stock +
    ', $' +
    Products.hotchocolate.price +
    ' per item'

  document.getElementById('eggs').innerHTML =
    'eggs: ' + Products.eggs.stock + ', $' + Products.eggs.price + ' per item'

  document.getElementById('salmon').innerHTML =
    'Salmon: ' +
    Products.salmon.stock +
    ', $' +
    Products.salmon.price +
    ' per item'

  document.getElementById('toast').innerHTML =
    'Toast: ' +
    Products.toast.stock +
    ', $' +
    Products.toast.price +
    ' per item'
}

displayProducts()

//---Customers---//

let customer = {
  order: [],
}

let minOrderSize = 1
let maxOrderSize = 10

function generateCustomerOrder() {
  //  get randome size for the order in a range, 1 - 10

  let orderSize = getRandomInt(minOrderSize, maxOrderSize)

  //  make a new array of the things they are ordering

  let newOrder = []
  let productsNames = Object.keys(Products)

  for (let i = 0; i <= orderSize; i++) {
    let productIndex = getRandomInt(0, productsNames.length - 1)
    let productName = productsNames[productIndex]
    newOrder.push(productName)
  }

  //  assign the new order to the customer object

  customer.order = newOrder

  //  display customer order

  displayOrder()
}

function displayOrder() {
  document.getElementById('customerOrder').innerHTML =
    'Customer order: ' + customer.order
}

// linking to customer button

document.getElementById('customerButton').onclick = generateCustomerOrder

//  --- Transaction --- //

let cash = 0

function increasCash(amount) {
  cash += amount
}

function displayCash() {
  document.getElementById('cash').innerHTML = 'Cash: ' + cash
}

displayCash()

function fillOrder() {
  // make a variable to keep track of our sale total

  let saleTotal = 0
  cash = 0

  // loop through the Customer Order array

  for (i = 0; i < customer.order.length; i++) {
    // if we have their products in stock, sell it to them, and keep track of the sale

    let productName = customer.order[i]

    if (Products[productName].stock > 0) {
      Products[productName].stock--
      saleTotal += Products[productName].price

      // if we dont have it alert we're out of this product
    } else {
      alert("I'm sorry, we're out of: " + productName)
      document.getElementById(productName).style.color = 'red'
    }
  }

  // add the sale totale to the cash
  increasCash(saleTotal)

  // clear customer order
  customer.order = []

  // display All
  displayProducts()
  displayCash()
  displayOrder()
}

document.getElementById('fillOrder').onclick = fillOrder
// --utility codes-- //

function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}
