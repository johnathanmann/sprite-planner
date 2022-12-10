const router = require("express").Router();
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  loginUser,
  getUserProjects
} = require("../../controllers/userController");

// /api/users
router.route("/").get(getAllUsers).post(createUser);
router.route("/login").post(loginUser);
// /api/users/:userId
router.route("/:userId").get(getUserById).put(updateUser).delete(deleteUser);
// /api/users/projects/:userId
router.route("/projects/:userId").get(getUserProjects)

module.exports = router;
