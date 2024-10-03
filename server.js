//sk_test_51Q5xRAJpeb3ugLMmKigRUvI8AMUOESW4qhbZQKAu0dsNwe0mhK0DVS8GgOoixgk3tSGiJtATp3qUVP02G4zVEBlC00MWpac0us
// Coffee: price_1Q5xXAJpeb3ugLMmcuLTbm8y
// Sunglasses: price_1Q5xZ8Jpeb3ugLMmMZMo2p5M
// Camera: price_1Q5xaBJpeb3ugLMm2lr8lMh5

const express = require('express');
var cors = require('cors');
const stripe = require('stripe')('sk_test_51Q5xRAJpeb3ugLMmKigRUvI8AMUOESW4qhbZQKAu0dsNwe0mhK0DVS8GgOoixgk3tSGiJtATp3qUVP02G4zVEBlC00MWpac0us');

const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

app.post("/checkout", async (req, res) => {
    /*
    req.body.items
    [
        {
            id: 1,
            quantity: 3
        }
    ]

    stripe wants
    [
        {
            price: 1,
            quantity: 3
        }
    ]
    */
    console.log(req.body);
    const items = req.body.items;
    let lineItems = [];
    items.forEach((item)=> {
        lineItems.push(
            {
                price: item.id,
                quantity: item.quantity
            }
        )
    });

    const session = await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode: 'payment',
        success_url: "http://localhost:3000/success",
        cancel_url: "http://localhost:3000/cancel"
    });

    res.send(JSON.stringify({
        url: session.url
    }));
});

app.listen(4000, () => console.log("Listening on port 4000!"));