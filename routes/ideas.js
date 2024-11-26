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

router.post('/', (req, res) => {
    const idea ={
        id: ideas.length + 1,
        text: req.body.text,
        tag: req.body.tag,
        username: req.body.username,
        date: new Date().toISOString().slice(0, 10),
    }

    ideas.push(idea)
    res.json({sucess: true, data: idea})
})
//Update idea
router.put('/:id',(req, res) => {
  const idea = ideas.find((idea) => idea.id === parseInt(req.params.id))
  if (!idea) {
      return res.status(404).json({sucess:false, error: "Resource not found"});
  }
  idea.text = req.body.text || idea.text
  idea.tag = req.body.tag || idea.tag
  
  res.json({sucess: true, data: idea})
})
// Delete idea
router.delete('/:id',(req, res) => {
  const idea = ideas.find((idea) => idea.id === parseInt(req.params.id))
  if (!idea) {
      return res.status(404).json({sucess:false, error: "Resource not found"});
  }
  const index = ideas.indexOf(idea)
  ideas.splice(index, 1)
  
  res.json({sucess: true, data: {}})
})
  



module.exports = router