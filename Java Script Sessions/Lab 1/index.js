// 1 -
var array=[55,89,76,45,93,67,82,38];

// 2 -
var sum = array.reduce((acc,current)=>acc+current,0)
console.log("the Average is : ");
console.log(sum / array.length);

// 3 -
console.log(Math.max(...array));

// 4 -
console.log(Math.min(...array));

// 5 - 
console.log(array.join(' ,'));
// 6 -
var newarray = array.toSorted();
console.log(newarray);

// 7 - 
var successStudents = array.filter(x => x>=60);
console.log(successStudents);
// 8 -
var percentageArray=array.map(element => `${element}%`);
console.log(percentageArray);
// 9 -
console.log(array.includes(76));

// 10 -
var array2=[2,1,3,2,7,2,8,4,3,6,10,9,12];

// 10.1 -
console.log(Math.max(...array2));
console.log(Math.min(...array2));

// 10.2 -
var uniqueArray=new Set(array2);
console.log(uniqueArray);

// 10.3 -
var evenArray=array2.filter(x => x%2==0);
console.log("Number of even values is");
console.log(evenArray.length);

// 10.4 -
var stringArray = String(evenArray);
console.log(stringArray);

 









