// var div = document.getElementById('playground')
// var p = document.getElementsByClassName('text')
// var h1 = document.getElementsByTagName('h1')
// console.log(div)
// console.log(p)
// console.log(h1)

var div = document.querySelector('#playground')
var p = document.querySelectorAll('.text')
var h1 = document.querySelector('h1')
// var ul = document.querySelector('div#playground > div ul')
// var ulAll = document.querySelectorAll('div#playground ul')
var input = document.querySelector('input')
div.innerHTML = '<h2 style="color: Green;">From javascript</h2>'
h1.textContent ='Change from JS'
input.value = 'I am input too :)'


console.log(div.innerHTML)
console.log(p)
console.log(h1.textContent)
console.log(input.value)
// console.log(ul)
// console.log(ulAll)