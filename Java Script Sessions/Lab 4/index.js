// Exercise 1
function Student(name,age,grade){
    this.name=name;
    this.age=age;
    this.grade=grade;

    if(this.prototype.name==="Window"){
        throw new Error("This isn't an object from class");
    }
}
Student.prototype.introduce=function(){

}
Student.prototype.isPassed=function(){

}

//Exercise 2
function Account(money){
    let balance=money;

    if(this.prototype.name==="Window"){
        throw new Error("This isn't an object from class");
    }

    Object.defineProperty(this,"Balance",{
        get : function(){
            return balance;
        },
        set : function(money){
            balance=money;
        }
    })
}
Account.prototype.deposit=function(amount){
    this.Balance = this.Balance + amount;
} 
Account.prototype.withdraw=function(amount){
    this.Balance = this.Balance - amount;
}

//Exercise 3
function Employee(name,salary){
    this.name=name;
    this.salary=salary;

    if(this.prototype.name==="Window"){
        throw new Error("This isn't an object from class");
    }
}
Employee.prototype.work=function(){
    console.log(`${this.name} is working ...`);
}
Employee.prototype.getSalary=function(){
    return this.salary;
}

function Manager(name , salary , department){
    this.department=department;
    Employee.call(this,name,salary);

    if(this.prototype.name==="Window"){
        throw new Error("This isn't an object from class");
    }
}
Manager.prototype=Object.create(Employee.prototype);
Manager.prototype.manage=function(){
    console.log(`${this.name} manages the ${this.department} department`);
}
Manager.prototype.constructor=Manager;