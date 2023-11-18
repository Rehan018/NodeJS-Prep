// controllers/successController.js
exports.getSuccess = (req, res, next) => {
    res.render('success', {
      pageTitle: 'Success',
      path: '/success',
    });
  };
  