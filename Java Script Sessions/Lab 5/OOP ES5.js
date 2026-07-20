// ES5 Approach 
function Animal(name ,age,color,weight){
    this.name=name;
    this.age=age;
    this.color=color;
    Animal.Counter++;

    let _weight=weight;
    Object.defineProperty(this,"WEIGHT",{
        get(){
            return _weight;
        },
        set(value){
            _weight=value;
        }
    })
}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Animal.Counter=0;

Animal.prototype.eat=function(){
    console.log("Eating");
}
Animal.prototype.sleep=function(){
    console.log("SLeeping");
}
Animal.prototype.makeSound=function(){
    console.log("Making Sound");
}




let animal1 = new Animal("cat",2,"White",10);
console.log(`New Animal Created, Number of Animals ${Animal.Counter}`);

let animal2 = new Animal("dog",4,"yellow",17);
console.log(`New Animal Created, Number of Animals ${Animal.Counter}`);

let animal3 = new Animal("sparrow",2,"red",10);
console.log(`New Animal Created, Number of Animals ${Animal.Counter}`);


animal1.eat();
animal1.makeSound();



function Dog(name ,age,color,weight,breed){
    this.breed=breed;
    Animal.call(this,name ,age,color,weight);
}
Dog.prototype.makeSound=function(){
    console.log("Dog Making Sound Now");
}





let dog1=new Dog("Bolt",11,"white",11,"dog");
console.log(dog1);

dog1.makeSound();