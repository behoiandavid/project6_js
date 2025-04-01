class CalorieCalculator {
    constructor() {
        this.products = new Map();
    };

    addProduct(productName, calorie) {
        this.products.set(productName, calorie)
    };

    getProductCalories(productName) {
        return this.products.get(productName) || "Product not foud";
    };

    removeProduct(productName) {
        if (this.products.has(productName)) {
            this.products.delete(productName);
        } else {
            console.log("Product not found")
        };
    };
};

const calorieCalculator = new CalorieCalculator();
calorieCalculator.addProduct('Apple', 52);
calorieCalculator.addProduct('Banana', 89);

console.log(calorieCalculator.getProductCalories('Apple')); // 52
console.log(calorieCalculator.getProductCalories('Banana')); // 89

calorieCalculator.removeProduct('Apple');
console.log(calorieCalculator.getProductCalories('Apple')); // Product not found



class UniqueUsernames {
    constructor() {
        this.usernames = new Set();
    };

    addUser(username) {
        this.usernames.add(username);
    };

    exists(username) {
        return this.usernames.has(username);
    };

    count() {
        return this.usernames.size;
    };
};


const uniqueUsernames = new UniqueUsernames()
uniqueUsernames.addUser('john_doe')
uniqueUsernames.addUser('jane_doe')
uniqueUsernames.addUser('john_doe') // Ця дія не змінить набір, оскільки 'john_doe' вже існує

console.log(`Існує 'john_doe': ${uniqueUsernames.exists('john_doe')}`) // true
console.log(`Кількість унікальних імен: ${uniqueUsernames.count()}`) // 2


