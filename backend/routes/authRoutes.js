const express = require("express");
const router = express.Router();
const { signup, login, updateUser } = require("../controllers/authControllers");
const {
  validateSignup,
  validateLogin,
  protect,
  validateUpdate,
} = require("../middleware/authMiddleware");

// Signup route
router.post("/signup", validateSignup, signup);

// Login route
router.post("/login", validateLogin, login);

router.put("/update", protect, validateUpdate, updateUser);

// Refresh token route (to be implemented)
router.post("/refresh-token", (req, res) => {
  // Token refresh logic will be added later
});

module.exports = router;
