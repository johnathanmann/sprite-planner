const router = require('express').Router();
const userRoutes = require('./userRoutes');
const projectRoutes = require('./projectRoutes');

router.use('/projects', projectRoutes)
router.use('/users', userRoutes);

module.exports = router;
