// Answer 1
const allPrices = items.map(function(X){
    return X.price
})
const sum = allPrices.reduce(function(A, B) {{
    return A + B
}})
const average = Math.floor(sum / allPrices.length) 

document.querySelector('#answer1').innerHTML = "The average price is $" + average + '.';

// Answer 2
const filtered = items.filter(function(item){
    if(item.price > 14 && item.price < 18) {
   return true
  }
  })

const A = items.map(function(item){
    return item.title
})
  document.querySelector('#answer2').innerHTML = "";


