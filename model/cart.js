const mongoose = require('mongoose');

const cartSchema = mongoose.Schema({
        userid: "",
        itemsList: [],
        totalQuantity: 0,
        showCart: false,
        productList:[],
        totalPrice: 0,
        isItemAdded:0,
        changed:false
})

module.exports = mongoose.model("CartItems", cartSchema)