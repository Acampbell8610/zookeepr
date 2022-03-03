const router = require('express').Router();
const animalRoutes = require('../apiRoutes/animalRoutes.js');
const zookeeperRoutes = require('../apiRoutes/zookeeperRoutes')


router.use(zookeeperRoutes);
router.use(animalRoutes);

module.exports = router;