let head = {
    glasses: 1,
  };
  
  let table = {
    pen: 3,
    __proto__: head,
  };
  
  let bed = {
    sheet: 1,
    pillow: 2,
    __proto__: table,
  };
  
  let pockets = {
    money: 2000,
    __proto__: bed,
  };

  function Pet(type, legs) {
    this.type = type;
    this.legs = legs;
  
    this.logInfo = function() {
      console.log(this === myCat); // => false
      console.log(`The ${this.type} has ${this.legs} legs`);
    }
  }
  
  const myCat = new Pet('Cat', 4);
  // logs "The undefined has undefined legs"
  // or throws a TypeError in strict mode
  setTimeout(myCat.logInfo, 1000);