const router = require('express').Router()

router.get('/new', (req, res) => {
  
  res.render('places/new')
})


router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisine: 'Thai, Pan-Asian',
        pic: 'css/images/thaiNoodles.jpg'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisine: 'Coffee, Bakery',
        pic: 'css/images/pastry.jpg'
      }]
      
    res.render('places/index', { places })
})

module.exports = router