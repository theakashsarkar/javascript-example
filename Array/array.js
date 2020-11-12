let fruits = new Array('Appale', 'komala', 'orange');
let vegetables = ['asparagus', 'tomato', 'broccoli'];
let allGroceries = fruits.concat(vegetables);
console.log(allGroceries);
console.log(allGroceries.slice(1, 4)); 
console.log(allGroceries.reverse());
console.log(allGroceries.sort()); 
let someNumber = [5, 10, 2, 25, 3, 255, 1, 2, 3, 4, 334,321, 2];
console.log(someNumber.sort(function(a,b){return a-b }));
console.log(someNumber.sort(function(a,b){return b-a}));

let emptyArray = new Array();
for(let num = 0; num < 10; num++ ){
    emptyArray.push(num);
}
console.log(emptyArray);
let student = {
 first: 'Akash',
 last: 'Sarkar',
 age: 25,
 height: 175,
 studentInfo: function(){
     return this.first + '\n' + this.last;
 }
}
console.log(student.first +' '+student.last);
console.log(student.studentInfo());