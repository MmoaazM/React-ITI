class Animal{
    #Weight;
    static counter=0;
    constructor(name,age,color,weight){
        this.name=name;
        this.age=age;
        this.color=color;
        this.#Weight=weight;

        Animal.counter++;
    }

    get WEIGHT(){
        return this.#Weight;
    }
    set WEIGHT(value){
        this.#Weight=value;
    }

    eat(){
        console.log("Eating");
    }
    sleep(){
        console.log("sleeping");
    }
    makeSound(){
        console.log("Animal Making Sound");
    }
}

let animal1 = new Animal("cat",2,"White",10);
console.log(Animal.counter);
console.log(animal1);


let animal2 = new Animal("dog",4,"yellow",17);
console.log(Animal.counter);

let animal3 = new Animal("sparrow",2,"red",10);
console.log(Animal.counter);


animal1.eat();






class Dog extends Animal{
    constructor(name ,age,color,weight,breed){
        super(name ,age,color,weight);
        this.breed=breed;
    }

    makeSound(){
        console.log("Dog Making Sound");
    }
}

let dog1=new Dog("Bolt",11,"white",11,"dog");
console.log(dog1);

dog1.makeSound();

