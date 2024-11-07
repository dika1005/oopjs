function calculateTotalPrice(orderItems) {
    return orderItems.reduce((total, item) => {
        return total + item.price * item.quantity;
    }, 0);
}

function getActiveUsernames(users) {
    return users
    .filter(user => user.isActive)
    .map(user => user.username);
}

function createUserProfile(user, address) {
    return {
        id: user.id,
        name: user.name,
        email: user.email,
        address: {
            street: address.street,
            city: address.city,
            country: address.country
        }
    };
}

function mergeSettings(defaultSettings, userSettings) {
    return {
        ...defaultSettings,
        ...userSettings
    };
}