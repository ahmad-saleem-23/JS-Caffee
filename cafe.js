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
    let productsName = productsNames[productIndex]
    newOrder.push(productsName)
  }

  //  assign the new order to the customer object

  customer.order = newOrder

  //  display customer order
  displayOrder()
}

generateCustomerOrder()

function displayOrder() {
  document.getElementById('customerOrder').innerHTML =
    'Customer order: ' + customer.order
}

// --utility codes-- //

function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}
