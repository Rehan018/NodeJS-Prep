// const products = [];
const Product = require('../model/product');
// const products = require('../routes/admin');
exports.getAddProduct = (req, res, next) => {
  res.render('add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
};

exports.postAddProduct = (req, res, next) => {
  // products.push({ title: req.body.title });

  const product = new Product(req.body.title);
  product.save();
  res.redirect('/');
};

exports.getProduct = (req, res, next) => {
  // const productsArray = products;

  Product.fetchAll((productsArray) => {
    res.render('shop', {
      prods: productsArray,
      pageTitle: 'Shop',
      path: '/',
      hasProducts: productsArray.length > 0,
      activeShop: true,
      productCSS: true,
    });
  }); // Closing parenthesis for Product.fetchAll callback

}; // Closing parenthesis and brace for exports.getProduct

exports.geterror = (req, res, next) => {
  res.render('error', {
    pageTitle: 'Page Not Found',
  });
};

exports.product = Product;
