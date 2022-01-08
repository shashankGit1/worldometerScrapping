const request  = require('request');  //for making request to server
const cheerio = require('cheerio');   // for web scrapping
// const chalk = require('chalk');


const { data } = require('cheerio/lib/api/attributes');

console.log("Before");
request('https://www.worldometers.info/coronavirus', cb);

console.log("After");
function cb(error, response, html){
    if(error){
        console.error('error: ', error);
    }
    else{
        //To handle html
        // console.log('html: ', html);

        handlehtml(html);
    }
}

function handlehtml(html){
    let selectorTool = cheerio.load(html);
    let h1s = selectorTool("h1");
    console.log(h1s.length); // returns the length of array of headings
   
    //To print total cases, deaths and recovered
    let dataArr = selectorTool("#maincounter-wrap span");

    let total = selectorTool(dataArr[0]).text();
    let deaths = selectorTool(dataArr[1]).text();
    let recovered = selectorTool(dataArr[2]).text();

    console.log(("Total Cases: " +total));
    console.log(("Deaths: " + deaths));
    console.log(("Recovered: " + recovered));    
}
