function deepFreeze(object) {
    Object.keys(object).forEach((name) => {
      const prop = object[name];
      if (typeof prop == 'object' && prop !== null) {
        deepFreeze(prop);
      }
    });
  
    return Object.freeze(object);
  }
  
  const complexUser = {
    name: 'Bob',
    email: 'bob@dicoding.com',
    preferences: {
      newsletter: true,
      notifications: 'weekly',
      address: {
        city: 'New York',
        zip: '10001'
      }
    }
  };
  
  deepFreeze(complexUser);

  complexUser.preferences.address.city = 'Los Angeles';
  
  console.log(complexUser.preferences.address.city); 