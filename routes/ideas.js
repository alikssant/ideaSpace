const express = require('express')
const router = express.Router()

const ideas = [
    {
      id: 1,
      text: 'Positive Newsletter, a newsletter that only shares positive, uplifting news',
      tag: 'Technology',
      username: 'TonyStark',
      date: '2022-01-02',
    },
    {
      id: 2,
      text: 'Milk cartons that turn a different color the older your milk is getting',
      tag: 'Inventions',
      username: 'SteveRogers',
      date: '2022-01-02',
    },
    {
      id: 3,
      text: 'ATM location app which lets you know where the closest ATM is and if it is in service',
      tag: 'Software',
      username: 'BruceBanner',
      date: '2022-01-02',
    },
  ];

// get all
router.get('/',(req, res) => {
    res.json({sucess: true, data: ideas})
})


//get single one
router.get('/:id',(req, res) => {
    const idea = ideas.find((idea) => idea.id === parseInt(req.params.id))
    if (!idea) {
        return res.status(404).json({sucess:false, error: "Resource not found"});
    }
    
    res.json({sucess: true, data: idea})
})




module.exports = router