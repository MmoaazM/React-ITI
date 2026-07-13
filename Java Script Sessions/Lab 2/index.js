// 1 -
var number=2;
number%2==0?console.log("Even"):console.log("Odd");

// 2 -
var fruits=["apple","orange","banana"];
for(var fruit of fruits){
    console.log(fruit);
}

// 3 -
const letters=["a","b","a","c","b","a"];
var set=new Set(letters);

set.forEach(element1 => {
    var counter=0;
    letters.forEach(element2 => {
        if(element1===element2){
            counter++;
        }
    })
    console.log(`${element1} => ${counter}`);

    counter=0;
})

// 4 -
function hoursLeftUntilMidnight(){
    var now = new Date();
    var midNight = new Date();

    midNight.setHours(24,0,0,0);

    var differenceInMilliSeconds=midNight-now;

    return differenceInMilliSeconds/(1000*60*60);
}

console.log(hoursLeftUntilMidnight());

// 5 -
console.log("Maltiplication Table of 5");
for(var i=1;i<=10;i++){
    console.log(`5 x ${i} = ${5*i}`);
}

// 6 -
function printArrayElements(arr){
    for(var i=0;i<arr.length;i++){
        console.log(arr[i]);
    }
}

var arr =[1,2,3,4,5];
printArrayElements(arr);

// 7 -
var number2=prompt("Enter A Number to Check it is Even or Odd");
number2%2==0?alert("The Number is Even") : alert("The Number is Odd");

// 8 -
var number3= prompt("Enter First Number : ");
var number4= prompt("Enter Second Number : ");

number3>number4?console.log("The First Number is greater"):console.log("The Second Number is Greater");