function display() {
    let customerName = document.getElementsByTagName("input")[0].value + " " + document.getElementsByTagName("input")[1].value;
    let phone = document.getElementsByTagName("input")[2].value + " " + document.getElementsByTagName("input")[3].value;
    let email = document.getElementsByTagName("input")[4].value;

    let products = [
        { name: "Apple", price: 10, id: "apple" },
        { name: "Banana", price: 5, id: "banana" },
        { name: "Avocado", price: 7, id: "avocado" }
    ];

    let selectedProducts = [];
    let checkboxes = document.querySelectorAll("input[type=checkbox]");

    checkboxes.forEach((checkbox, index) => {
        if(checkbox.checked){
            let quantity = document.getElementById(products[index].id).value;
            if(quantity>0){
                selectedProducts.push({
                    name: products[index].name,
                    price: products[index].price,
                    quantity: quantity,
                    total: products[index].price * quantity
                });
            }
        }
    });

    let receiptWindow = window.open("", "_blank");
    receiptWindow.document.write(`
        <html>
        <head>
            <title>Receipt</title>
            <style>
                body { font-family: Arial, sans-serif; text-align: center; background-color: #f5f5f5; }
                table { width: 50%; margin: auto; border-collapse: collapse; }
                th, td { padding: 10px; border: 1px solid black; }
                th { background-color: #a3a539; color: white; }
            </style>
        </head>
        <body>
            <h1>Receipt</h1>
            <p><strong>Customer Name:</strong> ${customerName}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Email:</strong> ${email}</p>
            <hr>
            <h2>Order Summary</h2>
            <table>
                <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Total</th>
                </tr>
                ${selectedProducts.map(p => `
                    <tr>
                        <td>${p.name}</td>
                        <td>${p.quantity} kg</td>
                        <td>$${p.price}</td>
                        <td>$${p.total}</td>
                    </tr>
                `).join('')}
            </table>
            <h3>Total Amount: $${selectedProducts.reduce((sum, p) => sum + p.total, 0)}</h3>
        </body>
        </html>
    `);
    receiptWindow.document.close();
}
