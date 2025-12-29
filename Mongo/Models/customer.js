const mongoose = require('mongoose');

main().then((res) => {
    console.log("connection successful")
}).catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/relationshipDB');
};


const orderSchema = new mongoose.Schema(
    {
        item: String,
        price: Number
    }
);

const customerSchema = new mongoose.Schema(
    {
        name: String,
        orders: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Order"
            }
        ]
    }
);

const order= mongoose.model("Order", orderSchema);

const customer = mongoose.model("Customer", customerSchema);

const findOne = async () => {
    try {
        const custData = await customer.findOne({}).populate("orders");
        console.log("populated data");
        console.log(custData);
    } catch (err) {
        console.log(err);
    }
};

findOne();


// const addCustomer = async () => {
//     try {
//         const customer1 = new customer({
//             name: "Alice",
//             orders: []
//         });
//         let order1 = await order.findOne({ item: "Laptop" });
//         let order2 = await order.findOne({ item: "Phone" });
//         customer1.orders.push(order1);
//         customer1.orders.push(order2);
//         const result = await customer1.save();
//         console.log(result);
//     }
//     catch (err) {
//         console.log(err);
//     }   
// };

// addCustomer();


// const addOrder = async () => {
//     try {
//         let orderData = await order.insertMany([
//             { item: "Laptop", price: 1200 },
//             { item: "Phone", price: 800 },
//             { item: "Tablet", price: 600 }]);
//         console.log(orderData);
//     } catch (err) {
//         console.log(err);
//     }
// };

// addOrder();