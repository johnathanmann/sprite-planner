const router = require("express").Router();
const {
  getAllProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject
} = require("../../controllers/projectController");

// /api/projects
router.route("/").get(getAllProjects).post(createProject);
// /api/projects/:projectId
router.route("/:projectId").get(getProjectById).put(updateProject).delete(deleteProject);

module.exports = router;
