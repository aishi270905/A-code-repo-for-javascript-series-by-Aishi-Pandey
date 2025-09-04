const coding = ["js", "ruby", "java", "cpp"]

const values = coding.forEach( (item) => {
//    console.log(item);
})

//console.log(values);
//const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//const newNums = myNums.filter( (num) => num>5)
// console.log(newNums);

 //another way(if scope is being is used, then you have to return something)

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//const newNums = myNums.filter( (num) => {
//    return num>5
//})
// console.log(newNums);

//using forEach(forEach does not return anything, always return undefined)

const newNum = []
myNums.forEach((num) => {
  if(num > 5){
     newNum.push(num)

  }
})

//console.log(newNum);

//printing the values of the array of objects(using filter function -> it returns a new array which satisfies the condition with the length that may be smaller than the original array)

const books = [
    {title: 'Book one', genre: 'Friction', publish: 1981, edition: 2004},
    {title: 'Book two', genre: 'Non-Friction', publish: 1992, edition: 2008},
    {title: 'Book three', genre: 'History', publish: 1999, edition: 2007},
    {title: 'Book four', genre: 'Non-Friction', publish: 1989, edition: 2010},
    {title: 'Book five', genre: 'Science', publish: 2009, edition: 2014},
    {title: 'Book six', genre: 'Friction', publish: 1987, edition: 2010},
    {title: 'Book seven', genre: 'History', publish: 1986, edition: 1996},
    {title: 'Book eight', genre: 'Science', publish: 2011, edition: 2016},
    {title: 'Book nine', genre: 'Non-Friction', publish: 1981, edition: 1989},
];

const userBooks = books.filter((bk) => bk.genre === 'History')

//console.log(userBooks);

const userBooks2 = books.filter((bk) => {
    return bk.publish >= 1995 && bk.genre === 'History'
})

//console.log(userBooks);


//usage of map(it returns a new array by applying a function to each array with the length same as the original array)
const newNums = myNums.map((num) => {
    return num + 10
})

//console.log(newNums);

//map inside map
const newArray = myNums
  .map((num) => num*10)
  .map((num) => num + 1)
  .filter((num) => num >= 40)
console.log(newArray);