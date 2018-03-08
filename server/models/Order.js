
function Order(order) {
    this.telephone = order.telephone;
    this.name = order.name;
    this.city = order.city;
    this.address = order.address;
    this.postalcode = order.postalcode;
    this.cart = order.cart;
};

module.exports = Order;
