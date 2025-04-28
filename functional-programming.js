// Functional Programming
// map
//  filter,
//  reduce,
//  some,
//  every,
//  find,
//  findIndex,

const numbers = [1, 2, 3, 4, 5]

const modifyArray = (arr) => {
  const newArr = []
  for (const num of arr) {
    newArr.push(num * num)
  }
  return newArr
}
console.log(modifyArray(numbers))

// Higher order function
// A higher order function is a function which takes another function as a parameter or return a function

const names = ['Hazrat', 'Sohan', 'Sakib', 'Sumon', 'Morshed', 'Mitu', 'Sabia']

const changeToUpperCase = (arr) => {
  const newArr = []
  for (const name of arr) {
    newArr.push(name.toUpperCase())
  }
  return newArr
}

console.log(changeToUpperCase(names))

// Map it modify and map the element
// [1, 2, 3, 4, 5] => [1, 4, 9, 16, 25]
//['Hazrat', 'Sohan', 'Sakib', 'Sumon', 'Morshed', 'Mitu', 'Sabia']

// syntax

const changedNames = names.map((name) => name.toUpperCase())
console.log(changedNames)
const squaredNumbers = numbers.map((num) => num ** 2)
console.log(squaredNumbers)
// [1, 2, 3, 4, 5,6, 7]=> [[1,1],[ 2,4],[ 3,9],[ 4,16],[ 5,25], [6, 36], [7, 49]]
// const countries = ['Finalnd', 'Estonia', 'Sweden'] => [['Filand','FINLAND',7],['Estonia','ESTONIA',7],['Sweden',SWEDEN', 6]]

const arrayOfArrays = numbers.map((num) => [num, num ** 2])
console.log(arrayOfArrays)

const arrayOfCountries = countries.map((country) => [
  country,
  country.toUpperCase(),
  country.length,
])
console.log(arrayOfCountries)

// Filter

const evens = numbers.filter((num) => {
  return num % 2 === 0
})

console.log(evens)

const odds = numbers.filter((num) => num % 2 !== 0)
console.log(odds)
console.log(countries)

const countriesWithLand = countries.filter((country) =>
  country.includes('stan')
)

console.log(countriesWithLand)

// Reduce
// ['papaya','Guava','Lemen'] => a fruit juice
//  [1, 2, 3, 4, 5] =>

// arr.reduce((acc, curr)=> acc + curr, initial)

// const findTotal = (arr) => {
//   let sum = 0
//   for (const num of arr) {
//     sum += num
//   }
//   return sum
// }
// console.log(findTotal(numbers))

const total = numbers.reduce((acc, cur) => acc + cur, 0)
console.log(total)

//  [1, 2, 3, 4, 5]
const someArrEvens = numbers.some((num) => num % 2 == 0)
console.log(someArrEvens)
const someAreOdds = numbers.some((num) => num % 2 !== 0)
console.log(someAreOdds)

const everyItemIsEven = numbers.every((num) => num % 2 == 0)
console.log(everyItemIsEven)

const three = numbers.find((num) => num == 3)
console.log(three)

const threeIndex = numbers.findIndex((num) => num == 3)
console.log(threeIndex)
