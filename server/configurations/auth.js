module.exports = {
  isAuthenticated: (req, res, next) => {
    if (req.isAuthenticated()) {
      next();
    } else {
      res.redirect('/users/login');
    }
  },
  isInRole: (role) => {
    return (req, res, next) => {
      if (req.user && req.user.role== role) {
        console.log(req.user);
        console.log(req.user.role);
        next();
      } else {
        res.status(404).send();
      }
    };
  }
};
