import Router from 'express';
const router = Router();

// Mock list of products
let products = [
    { id: 1, name: 'Laptop', price: 999.99 },
    { id: 2, name: 'Smartphone', price: 499.99 },
    { id: 3, name: 'Headphones', price: 199.99 }
];

// GET method to list all products as HTML
router.get('/', (req, res) => {
    let productListHtml = '<h3>List of Products:</h3><ul>';
    products.forEach(product => {
        productListHtml += `<li>${product.name} - $${product.price}</li>`;
    });
    productListHtml += '</ul>';

    res.send(productListHtml); // Send the HTML response with the list of products
});

// POST method to add a new product
router.post('/', (req, res) => {
    const newProduct = req.body;
    newProduct.id = products.length + 1; // Assign a new unique id to the new product
    products.push(newProduct); // Add the new product to the array
    res.send(`Product added: ${JSON.stringify(newProduct)}`);
});

export default router;


