const Product = require("../models/products");

exports.userGetCart = async (req, res, next) => {
  try {
    if (req.user) {
      const userCart = await req.user.getCart();
      // getting user's cart
      if (!userCart) {
        // if the user doesn't have an existing cart then create it
        const userCart = await req.user.createCart();
        return userCart;
      }
      const userCartItems = await userCart.getProducts();
      res.json(userCartItems);
    } else {
      return next();
    }
  } catch (e) {
    next(e);
  }
};

exports.addToCart = async (req, res, next) => {
  try {
    // declaring a product variable
    let product;
    let newQuantity = req.body.quantity;
    const user = req.user;
    // fetching the user's cart
    const userCart = await user.getCart();
    // getting the id of the product in the cart if it exists
    const productId = req.body.product.id;
    // checking to see if product already exists in the user's cart where product.id === productId
    const userCartItem = await userCart.getProducts({
      where: { id: productId },
      //   returns an array of products even if only 1 product exists in DB
    });
    if (userCartItem.length > 0) {
      // if userCartItem exists then set product = first item of userCartItem[0].
      //   if no userCartItem, then product is undefined;
      product = userCartItem[0];
    }
    if (product) {
      console.log("newQuan", newQuantity);
      console.log("productIF", product);
      // if product exists in cart already get the current item quantity in cart
      if (newQuantity <= 0) {
        return await product.cartItem.destroy();
      }
      res.send(
        userCart.addProduct(product, {
          through: { quantity: newQuantity },
        })
      );
    }
    // If the product doesn't exist in cart then find the product with product.id === productId in DB
    return Product.findByPk(productId).then((product) => {
      // find the product with the product.id === productId then add it to cart with getCart.addProduct() => sequelize method available via table association. (through: quantity) also updating the quantity in the cartItem table
      userCart.addProduct(product, {
        through: { quantity: newQuantity },
      });
    });
    // addProduct() sequelize method for many-to-many relationship tables (Cart.addProduct)
    // Product and Cart are related through the CartItem table with {through:}
    // adding the product that matches the productId and {through the CartItem table} set the quantity column to newQuantity
  } catch (e) {
    next(e);
  }
};

exports.removeFromCart = async (req, res, next) => {
  try {
    const userCart = await req.user.getCart();
    const productId = req.body.product.id;
    const userCartItem = await userCart.getProducts({
      where: { id: productId },
    });
    const product = userCartItem[0];
    return await product.cartItem.destroy();
  } catch (e) {
    next(e);
  }
};

exports.createOrderFromCart = async (req, res, next) => {
  try {
    if (req.user) {
      // Get the user's cart and all the cartItems in it
      const userCart = await req.user.getCart();
      console.log("userCartORDER", userCart);
      const userCartItems = await userCart.getProducts();
      // create an order for the user (magic method via sequelize associations);
      console.log("userCartItemsORDER", userCartItems);
      const userOrder = await req.user.createOrder();
      // Add the products from Cart into Order
      const addProductsIntoOrder = await userOrder.addProducts(
        userCartItems.map((item) => {
          // setting the OrderItem table's quantity to the cartItem's quantity for each item in cart
          item.orderItem = { quantity: item.cartItem.quantity };
          return item;
        })
      );
      return addProductsIntoOrder;
    } else {
      return next();
    }
  } catch (e) {
    next(e);
  } finally {
    // Finally block executes after the return statement of try/catch block
    // Get the user's cart
    const userCart = await req.user.getCart();
    // Getting rid of all the cartItems in user's cart after placing order
    return await userCart.setProducts(null);
  }
};

exports.getUserOrders = async (req, res, next) => {
  try {
    if (req.user) {
      // getOrders => sequelize magic method from user.hasManyOrders, order.belongsToassosciation. (include the products table)
      const userOrder = await req.user.getOrders({
        include: ["products"],
      });
      res.json(userOrder);
    } else {
      return next();
    }
  } catch (e) {
    next(e);
  }
};

