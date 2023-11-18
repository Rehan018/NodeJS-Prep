const path=require('path');
const express=require('express');
const {rootDir}=require('../util/path');
const router=express.Router();

router.get('/constact-us', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'contact.html'));
});

// Success page
router.get('/success', (req, res) => {
    res.send('<h1>Form successfully filled</h1>');
});

module.exports = router;
