var fs = require('fs'),
    request = require('request'),
    cheerio = require('cheerio');

console.log("user ");
    url = 'https://www.amazon.com/s/&field-keywords=deodorant+for+men';
    request(url, function(error, response, html) {
      if (!error && response.statusCode == 200) {
       // console.log(html);
        
        var $ = cheerio.load(html);
        $('#s-results-list-atf').each(function(i, element) {
            var el = $(this);
            var price = el.text();
            console.log(price);
        })
    }
    });

