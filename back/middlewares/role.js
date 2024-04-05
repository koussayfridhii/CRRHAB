const roles = {
  admin: "admin",
  user: "user",
};

const inRole =
  (...roles) =>
  (req, res, next) => {
    const exist = roles.find((role) => role === req.user.role);
    exist ? next() : res.status(403).json({ message: "ure not allowed" });
  };

module.exports.rolesMiddleware = { roles, inRole };
