/*
* Required PhantomJS and CasperJS installed
* http://phantomjs.org/ and http://casperjs.org/
*/
var casper = require('casper').create({
    verbose: false,
    logLevel: 'debug',
    pageSettings: {
         loadImages:  false,         // The WebPage instance used by Casper will
         loadPlugins: false,         // use these settings
         userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_5) AppleWebKit/537.4 (KHTML, like Gecko) Chrome/22.0.1229.94 Safari/537.4'
    }
});

// print out all the messages in the headless browser context
casper.on('remote.message', function(msg) {
    this.echo('remote message caught: ' + msg);
});

// print out all the messages in the headless browser context
casper.on("page.error", function(msg, trace) {
    this.echo("Page Error: " + msg, "ERROR");
});

//go to page
casper.start('https://github.com/antonioortegajr');

// Set text as variable
var pagetTitleText = 'Page Title: ';

// get the page title and pass in variable for the sake of example
casper.thenEvaluate(function(pagetTitleText){
   console.log(pagetTitleText + document.title);
}, pagetTitleText);

casper.run();
