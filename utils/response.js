module.exports.errorUserLogin = (
  req,
  res,
  email,
  password,
  errorMessage,
) =>
  res.render('auth/login', {
    pageName: 'User Login',
    path: '/login',
    errorMessage,
    success: req.flash('success'),
    oldInput: {
      email,
      password,
    },
    validationErrors: [],
  });

 
