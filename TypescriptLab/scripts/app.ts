//Tallest Mountain

interface Mountain {
    name: string;
    height: number;
}

const mountains: Mountain[] = [
    { name: 'Kilimanjaro', height: 19341 },
    { name: 'Everest', height: 29029 },
    { name: 'Denali', height: 20310 }
];

//findNameOfTallestMountain
function findNameOfTallestMountain(mntns: Mountain[]): string {
    let nameOfTallestMountain: string = "";
    let tallestHeight: number = 0;
    for (const mtn of mountains) {
        if (mtn.height > tallestHeight) {
            tallestHeight = mtn.height;
            nameOfTallestMountain = mtn.name;
        }

    }

    return nameOfTallestMountain;
}

let tallestMountain: string = findNameOfTallestMountain(mountains);
console.log(tallestMountain);

//Products
interface Product {
    name: string;
    price: number;
}

const products: Product[] = [
    { name: 'Printer', price: 150 },
    { name: 'Paper', price: 60 },
    { name: 'Pens', price: 20 }
];

function calcAverageProductPrice(products: Product[]): number {
    let price: number = 0;
    for (const product of products) {
        // console.log(product.price);
        price += product.price;
    }

    // console.log(price, products.length);

    let avgPrice = price / products.length;
    console.log(avgPrice);
    return avgPrice;

}
calcAverageProductPrice(products);

//Inventory

interface InventoryItem {
    product: Product;
    quantity: number;
}

const inventory: InventoryItem[] = [
    {
        product: {
            name: 'motor', price: 10.00,
        },
        quantity: 10,
    },

    {
        product: {
            name: 'sensor', price: 12.50,
        },
        quantity: 4,
    },

    {
        product: {
            name: 'LED', price: 1.00,
        },
        quantity: 20,
    },
];


function calcInventoryValue(inventoryEntry: InventoryItem[]): number {
    let totalValue = 0;


    for (const entry of inventoryEntry) {
        totalValue += (entry.product.price * entry.quantity);
    }
    return totalValue;

}

let inventoryValue = calcInventoryValue(inventory);

console.log(inventoryValue);