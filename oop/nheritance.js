class SmartPhones {
    constructor(color, brand, model, price) {
      this.color = color;
      this.brand = brand;
      this.model = model;
      this.price = price;
    }
  
    charging() {
      console.log(`Charging ${this.model}`);
    }
  }
  
  class iOS extends SmartPhones {
    airDrop() {
      console.log('iOS have a behavior AirDrop');
    }
  }
  
  class Android extends SmartPhones {
    splitScreen() {
      console.log('Android have a Split Screen');
    }
  }
  
  class Windows extends SmartPhones {
      bios() {
          console.log('windows have a bios')
      }
  }
  
  const ios = new iOS('black', 'A', '12 Pro Max', 1000);
  const android = new Android('white', 'B', 'Galaxy S21', 3000);
  const windows = new Windows('black', 'i8', 'fujitsu', 5000);
  
  ios.charging(); // Output: Charging 12 Pro Max
  ios.airDrop(); // Output: iOS have a behavior AirDrop
  windows.bios
  
  android.charging(); // Output: Charging Galaxy S21
  android.splitScreen(); // Output: Android have a Split Screen
  windows.bios();