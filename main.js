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
// const filtered = items.filter(function(item){
//     if(item.price > 14 && item.price < 18) {
//    return true
//   }
//   })

let Q2 = items.filter(function(x){
    return x.price > 14 && x.price < 18
})
.map(function(y){
    return y.title

}).join("\n")
  document.querySelector('#answer2').innerHTML = Q2;

//   Answer 3


let Q3 = items.filter(function(x){
    return x.currency_code == "GBP" 

})
.map(function(B){
    return B.title + "cost "+ "£" + B.price

}).join("\n ")
document.querySelector('#answer3').innerHTML = Q3;


// Answer 4

let Q4 = items.filter(function(x){
    return x.materials.includes("wood")
    console.log(Q4)
})
.map(function(Y){
    return Y.title + " is made of wood" 
}).join("\n ")
document.querySelector('#answer4').innerHTML = Q4;



// Answer 5
// let Q5 = items.filter(function(x){
//     return x.materials>= 8
// })
// .map(function(y){
//     return y.title 
// }).join('\n')
// document.querySelector('#answer5').innerHTML = Q5;

// Answer 6

let Q6 = items.filter(function(x){
    return x.who_made === "i_did"

})
.length
document.querySelector('#answer6').innerHTML = Q6 + " were made by their sellers"