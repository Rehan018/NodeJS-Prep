const products = [];

// const products=require('../routes/admin');
exports.getAddProduct=(req,res,next)=>{
    res.render('add-product',{
        pageTitle: 'Add Product',
        path:'/admin/add-product',
        formsCSS:true,
        productCSS:true,
        activeAddProduct:true
    });
};

exports.postAddProduct = (req, res, next) => {
    products.push({ title: req.body.title });
    res.redirect('/');
  };
  
  exports.getProduct = (req, res, next) => {
    const productsArray = products;
    res.render('shop', {
      prods: productsArray,
      pageTitle: 'Shop',
      path: '/',
      hasProducts: productsArray.length > 0,
      activeShop: true,
      productCSS: true
    });
  };
  
  exports.geterror = (req, res, next) => {
    res.render('error', {
      pageTitle: 'Page Not Found',
    });
  };

  exports.products=products;