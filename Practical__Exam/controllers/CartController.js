const userModel = require('../models/usersModel');

const viewCartPage = (req, res) => {
    const cart = req.session.cart || [];
    const totalPrice = cart.reduce((sum, item) => sum + parseFloat(item.price), 0);

    return res.render('viewCart', { cart, totalPrice });
};

const addToCart = async (req, res) => {
    try {
        const product = await userModel.blogUser.findById(req.query.cartId);

        if (!product) {
            return res.redirect('/viewproductpage');
        }

        if (!req.session.cart) {
            req.session.cart = [];
        }

        let productExists = false;

        for (let item of req.session.cart) {
            if (item._id.toString() === product._id.toString()) {
                productExists = true;
                break;
            }
        }

        if (productExists) {
            console.log('Product is already in the cart!');
        } else {
            req.session.cart.push(product);
        }

        return res.redirect('/viewproductpage');
    } catch (err) {
        console.log(err);
        return false;
    }
};

const deleteCart = async (req, res) => {
    try {

        if (!req.session.cart) {
            req.session.cart = [];
        }

        req.session.cart = req.session.cart.filter(item => item._id !== req.query.delId);

        console.log(`Cart Item Successfully Deleted..!`);
        return res.redirect('/cart');

    } catch (err) {
        console.error(err);
        return false;
    }
}

module.exports = {
    viewCartPage,
    addToCart,
    deleteCart
};

