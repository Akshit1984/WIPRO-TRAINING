//QUESTION 1

fetch("https://catfact.ninja/facts")
  .then(res => res.json())
  .then(data => data.data.map(d => d.fact))
  .then(data => console.log(data))
  .catch(error => console.error("Error fetching data:", error));



//QUESTION 2

fetch("https://dog.ceo/api/breeds/list/all")
  .then(res => res.json())
  .then(data => console.log(Object.keys(data.message).splice(0, 1)))
  .catch(err => console.log(err.message));



// QUESTION 3

fetch("https://fakestoreapi.com/products")
  .then(res => res.json())
  .then(data => console.log(data.map(p => p.price).reduce((a, b) => a + b, 0)))
  .catch(err => console.log(err.message));



// QUESTION 4


fetch("https://jsonplaceholder.typicode.com/posts")
  .then(res => res.json())
  .then(data => console.log(data.filter(p => p.userId === 1).length))
  .catch(err => console.log(err.message));



// QUESTION 5


fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json())
  .then(data => console.log(data[0].name, typeof data))
  .catch(err => console.log(err.message));




// QUESTION 6


fetch("https://api.quotable.io/quotes")
  .then(res => res.json())
  .then(data => console.log(data.results[0].content))
  .catch(err => console.log(err.message));


// QUESTION 7


fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd")
  .then(res => res.json())
  .then(data => console.log(data.bitcoin.usd))
  .catch(err => console.log(err.message));
