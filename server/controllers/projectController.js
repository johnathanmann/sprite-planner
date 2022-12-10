const User = require("../models/User");
const Project = require("../models/Project");

async function getAllProjects(req, res) {
  Project.find({})
        .then(allProjects => res.json(allProjects))
        .catch(err => {
            console.log(err);
            res.status(400).json(err)
        })
}

async function getProjectById(req, res) {
  try {
    const singleProject = await Project.findById(req.params.projectId).select("-__v");
    res.status(200).json(singleProject);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
}


async function createProject(req, res) {
  try {
    const newProject = await Project.create(req.body);
    const associatedUser = await User.findOneAndUpdate(
      { _id: req.body.user },
      { $addToSet: { projects: newProject._id } },
      { new: true }
    )
      .select("-__v")
      .populate("projects");
    res.status(200).json(associatedUser);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
}

async function updateProject(req, res) {
  try {
    const updatedProject = await Project.findOneAndUpdate(
      { _id: req.params.projectId },
      { $set: req.body },
      { new: true }
    ).select("-__v");
    res.status(200).json(updatedProject);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
}

async function deleteProject(req, res) {
  try {
    await Project.findOneAndDelete({ _id: req.params.projectId });
    const associatedUser = await User.findOneAndUpdate(
      { projects: req.params.projectId },
      { $pull: { projects: req.params.projectId } },
      { new: true }
    )
      .select("-__v")
      .populate("projects");
    res.status(200).json(associatedUser);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
}



module.exports = {
  getAllProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject
};
