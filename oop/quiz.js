class Animal {
    constructor(name, age, isMammal) {
        this.name = name;
      this.age = age;
      this.isMammal = isMammal;
    }
  }
    
    class Rabbit extends Animal {
      constructor(name, age) {
      super(name, age, true);
    }
  
      eat() {
       return `${this.name} sedang makan!`;   
    }
  }

    class Eagle extends Animal {
        constructor(name, age) {
        super(name, age, false);
      }

    fly() {
    return `${this.name} sedang terbang!`;
    }
  }
  
    const myRabbit = new Rabbit("Labi", 2);
    const myEagle = new Eagle("Elo", 4);
  
    console.log(myRabbit.eat());
    console.log(myEagle.fly());
  
  