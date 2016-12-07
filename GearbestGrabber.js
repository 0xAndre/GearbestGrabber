'use strict'

const gearbest = require('./lib/product.js')

if(process.argv.length < 3){
  console.log('Please provide product(s) id(s)!')
  console.log('eg: node GearbestGrabber.js 299013 577788')
  process.exit()
}

const ids =  process.argv.slice(2)
gearbest(ids, (err, price) => {
      if(err) console.log('error')
      console.log(price)
})
