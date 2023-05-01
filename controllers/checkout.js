require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

exports.orderCheckout = async (req, res, next) => {
  try {
    let userCart;
    let userCartItems;
    const { orderTotal } = req.body;
    if (req.user) {
      userCart = await req.user.getCart();
      userCartItems = await userCart.getProducts();
      const lineItems = userCartItems.map((item) => {
        // stripe needs an array of objects that has currrency quantity and amount
        return {
          price_data: {
            currency: "usd",
            product_data: {
              name: item.name,
            },
            unit_amount: Math.round(item.price * 100),
          },
          quantity: item.cartItem.quantity,
        };
      });
      // creating a stripe checkout session
      const stripeSession = await stripe.checkout.sessions.create({
        // configuration of stripe session. payment_menthod => accepts credit cards
        mode: "payment",
        success_url: "http://localhost:3000/confirmation",
        cancel_url: "http://localhost:3000/cart",
        line_items: lineItems,
        payment_method_types: ["card"],
      });
      console.log("stripeSession", stripeSession);
      res.json({ stripeSession: stripeSession });
    }
  } catch (e) {
    next(e);
  }
};
