# Gearprice

> Gearbest product information grabber

This module provides a product information (Price, Average Rating, Currency, Availability) from [GearBest](http://www.gearbest.com)

# Standalone app

### Requisits:
- Node, npm

### Install:
- npm install GearbestGrabber --save


### Usage:
```
const gearbest = require('GearbestGrabber')

const exampleOfIdsArray = [299013, 204428]

gearbest(exampleOfIdsArray, (err, prod) => {
	console.log(prod)
})

```

### Output:
```
[ Gear {
    name: 'Cheerson CX - 10W Quadcopter',
    priceCurrency: 'USD',
    averageRating: '4.8',
    price: '25.89',
    availability: 'In Stock',
    requestTime: 2016-12-07T14:44:48.177Z },
  Gear {
    name: 'OUKITEL K10000 4G Phablet',
    priceCurrency: 'USD',
    averageRating: '4.8',
    price: '163.99',
    availability: 'In Stock',
    requestTime: 2016-12-07T14:44:48.255Z 
} ]

```
