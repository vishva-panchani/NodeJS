const express = require('express');
 const router = express.Router();
 const verifyToken = require('../middleware/authMiddleware');

 // Protected route
router.get('/public', (req, res) => {
    res.status(200).json({ message: 'Access for Public' });
 });

router.get('/private', verifyToken, (req, res) => {
   res.status(200).json({ message: 'Access for Private' });
});
module.exports = router;