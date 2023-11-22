const ErrorController = {
    notFound(req, res) {
      // Logic to handle 404 Not Found errors
      res.status(404).render('error/404', {
        pageTitle: 'Page Not Found',
        path: '/404'
      });
    },
  
    serverError(err, req, res, next) {
      // Logic to handle 500 Internal Server Errors
      console.error(err.stack);
      res.status(500).render('error/500', {
        pageTitle: 'Internal Server Error',
        path: '/500'
      });
    }
  };
  
  module.exports = ErrorController;
  