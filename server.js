const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(morgan('dev'))


// TASK 1
app.get('/greeting/:username', (req, res) => {
  const name = req.params.username
  res.send(`Hello there, ${name}!`)
});



// TASK 2
app.get('/roll/:number', (req, res) => {
  const number = req.params.number
  if (number > 0 ){
    const random = Math.floor(Math.random() * number)
    res.send(`You rolled a ${random}`)

  }else {
    res.send('You must specify a number')
  }
});



// TASK 3
app.get('/collectibles/:index', (req, res) => {

  const index = req.params.index
  const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];

  if (index < collectibles.length){
    res.send(`So, you want the ${collectibles[index].name}? For ${collectibles[index].price}, it can be yours!`)
  }else {
    res.send('This item is not yet in stock. Check back soon!')
  }
});



// TASK 4
app.get('/shoes', (req, res) => {
  const shoes = [
    { name: "Birkenstocks", price: 50, type: "sandal" },
    { name: "Air Jordans", price: 500, type: "sneaker" },
    { name: "Air Mahomeses", price: 501, type: "sneaker" },
    { name: "Utility Boots", price: 20, type: "boot" },
    { name: "Velcro Sandals", price: 15, type: "sandal" },
    { name: "Jet Boots", price: 1000, type: "boot" },
    { name: "Fifty-Inch Heels", price: 175, type: "heel" }
  ];

  const minPrice = parseInt(req.query.minPrice);
  const maxPrice = parseInt(req.query.maxPrice);
  const type = req.query.type;
  let html = ''

  if (minPrice){
    const expensiveShoes = shoes.filter( shoe => shoe.price >= minPrice )
    expensiveShoes.forEach ( shoe => html += `Name: ${shoe.name} - Price: ${shoe.price} - Type: ${shoe.type} <br>` )

  }else if (maxPrice){
    const afordableShoes = shoes.filter( shoe => shoe.price <= maxPrice )
    afordableShoes.forEach ( shoe => html += `Name: ${shoe.name} - Price: ${shoe.price} - Type: ${shoe.type} <br>` )

  }else if (type){
    const typeShoes = shoes.filter( shoe => shoe.type === type )
    typeShoes.forEach ( shoe => html += `Name: ${shoe.name} - Price: ${shoe.price} - Type: ${shoe.type} <br>` )

  }else {  
    shoes.forEach ( shoe => html += `Name: ${shoe.name} - Price: ${shoe.price} - Type: ${shoe.type} <br>` )
  }
  res.send (html)

});



app.listen('3000', () => {
  console.log('Listening to PORT: 3000')
});


