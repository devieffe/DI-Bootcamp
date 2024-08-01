const products = require('./xp1-products');

function find(name) {
    const product = products.find(p => p.name.toLowerCase() === name.toLowerCase());
    if (product) {
        console.log(`Product:
        Name: ${product.name}
        Price: $${product.price}
        Category: ${product.category}`);
    } else {
        console.log('Not found.');
    }
}

find('Laptop');
find('TV set');
find('Desk Chair');
find('Smartphone');

