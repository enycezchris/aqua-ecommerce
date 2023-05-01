const Product = require("../models/products");

exports.fetchAllProducts = async (req, res, next) => {
  try {
    // set a page variable;
    let page;
    let totalProducts;
    // setting the products viewed per page
    const productsPerPage = 5;
    // if there is a req.query.page ("/?page=") in url set the page = req.query.page
    if (req.query.page) {
      page = req.query.page * 1;
    } else {
      // if no req.query.page => set it to 1 as default;
      page = 1;
    }
    console.log("page", page);
    const products = await Product.findAndCountAll({
      // sequelize method limit => limits the amount of data returned
      limit: productsPerPage,
      // sequelize method offset => skips the amount of data (the current page number multiply by productsPerPage) ex: currentPage = 1, (1-1) = 0 * 5 => skips no products
      offset: (page - 1) * productsPerPage,
    });
    res.json(products);
  } catch (e) {
    next(e);
  }
};

exports.fetchSingleProduct = async (req, res, next) => {
  try {
    const productId = req.params.id;
    console.log("productId", productId);
    const product = await Product.findByPk(req.params.id);
    console.log("product", product);
    res.json(product);
  } catch (e) {
    next(e);
  }
};

exports.userAddProduct = async (req, res, next) => {
  try {
    // createProduct (Method from sequelize through associations) User.hasMany(Product)
    const userProduct = await req.user.createProduct({
      name: "test",
      price: 28.99,
    });
    userProduct.save();
    res.json(userProduct);
  } catch (e) {
    next(e);
  }
};

exports.userGetProducts = async (req, res, next) => {
  try {
    const userProducts = await req.user.getProducts();
    res.json(userProducts);
  } catch (e) {
    next(e);
  }
};


