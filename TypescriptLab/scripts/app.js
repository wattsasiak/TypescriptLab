//Tallest Mountain
var mountains = [
    { name: 'Kilimanjaro', height: 19341 },
    { name: 'Everest', height: 29029 },
    { name: 'Denali', height: 20310 }
];
//findNameOfTallestMountain
function findNameOfTallestMountain(mntns) {
    var nameOfTallestMountain = "";
    var tallestHeight = 0;
    for (var _i = 0, mountains_1 = mountains; _i < mountains_1.length; _i++) {
        var mtn = mountains_1[_i];
        if (mtn.height > tallestHeight) {
            tallestHeight = mtn.height;
            nameOfTallestMountain = mtn.name;
        }
    }
    return nameOfTallestMountain;
}
var tallestMountain = findNameOfTallestMountain(mountains);
console.log(tallestMountain);
var products = [
    { name: 'Printer', price: 150 },
    { name: 'Paper', price: 60 },
    { name: 'Pens', price: 20 }
];
function calcAverageProductPrice(products) {
    var price = 0;
    for (var _i = 0, products_1 = products; _i < products_1.length; _i++) {
        var product = products_1[_i];
        // console.log(product.price);
        price += product.price;
    }
    // console.log(price, products.length);
    var avgPrice = price / products.length;
    console.log(avgPrice);
    return avgPrice;
}
calcAverageProductPrice(products);
var inventory = [
    {
        product: {
            name: 'motor', price: 10.00
        },
        quantity: 10
    },
    {
        product: {
            name: 'sensor', price: 12.50
        },
        quantity: 4
    },
    {
        product: {
            name: 'LED', price: 1.00
        },
        quantity: 20
    },
];
function calcInventoryValue(inventoryEntry) {
    var totalValue = 0;
    for (var _i = 0, inventoryEntry_1 = inventoryEntry; _i < inventoryEntry_1.length; _i++) {
        var entry = inventoryEntry_1[_i];
        totalValue += (entry.product.price * entry.quantity);
    }
    return totalValue;
}
var inventoryValue = calcInventoryValue(inventory);
console.log(inventoryValue);
