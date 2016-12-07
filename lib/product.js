'use strict'

const request = require('request')
const sprintf = require('sprintf')
const parser = require('cheerio')


const url = 'http://www.gearbest.com/_/pp_'
const extension = '.html'


/*
* Constructor
* entity creator
*/
function Gear(obj){
    this.name = obj.name
    this.priceCurrency = 'USD' //default curreny price
    this.averageRating = obj.averageRating
    this.price = obj.price
    this.availability = obj.availability
    this.requestTime =  new Date();
}

/**
 * Get Product info from GearBest
 *
 * @param ids
 * @param callback(err, prod)
 */

function information(ids, callback){
  const products = []
  ids.forEach(id => singleInformation(id, (err, prod) => {
      if(err != null) callback(err)
      else{
          products.push(prod)
          if(ids.length == products.length) callback(null,products)
      }
  }))
}


function singleInformation(id, callback){
  const reqUrl = url+id+extension
  request(reqUrl, function (error, response, body) {
      if (error || response.statusCode != 200) {
          callback(error)
          return
      }

      let $ = parser.load(body)

      let info = []
      $('span').each(function(i, elem) {
        if( ($(this).attr('itemprop') != undefined) && $(this).attr('content') != undefined)
          info.push($(this).attr('content'));
      });

      $('h1').each(function(i, elem) {
        if($(this).attr('itemprop') == 'name')
          info.push($(this).html());
      });

      $('span').each(function(i, elem) {
        if($(this).hasClass('fb pl5 pr5 ratings'))
          info.push($(this).html());
      });

      callback(null, new Gear({
          'name': info[2],
          'averageRating': info[3],
          'price': info[0],
          'availability': info[1]
      }))
  })
}

module.exports = information
