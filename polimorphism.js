class SmartPhones {
    constructor(color, brand, model) {
      this.color = color;
      this.brand = brand;
      this.model = model;
    }
  
    charging() {
      console.log(`Charging ${this.model}`);
    }
  }
  
  class Android extends SmartPhones {
    constructor(color, brand, model, device) {
      super(color, brand, model);
      this.device = device;
    }
  
    charging() {
      super.charging();
      console.log(`Charging ${this.model}, ${this.device} with fast charger`);
    }
  
    splitScreen() {
      console.log('Android have a Split Screen');
    }
  }

  class Windows extends SmartPhones {
    constructor(color, brand, model, device) {
      super(color, brand, model);
      this.device = device;
    }
  
    charging() {
      super.charging();
      console.log(`Charging ${this.model}, ${this.device} with ultra charger`);
    }
  
    bios() {
      console.log('Windows have a bios set up');
    }
  }
  
  const android = new Android('white', 'B', 'Galaxy S21', 'smart TV');
  const windows = new Windows('black', 'i8', 'fujitsu', 'laptop');

  android.charging();
  windows.charging();
  