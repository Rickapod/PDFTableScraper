//pull in txt file
var PDFText = require();

//remove unnecessary text from PDFText


//pull out the product numbers and store them in an object
var modelObject = {};
var skuNumbers = PDFtext.substring(
  PDFtext.indexOf('[SKU Number]') + '[SKU Number]'.length, PDFtext.indexOf('Model Name'));
var modelNumberRE = /[^\D]{6}-[\w]{3}/g;
var skuNumbers = skuNumbers.match(modelNumberRE);
for (var i = 0; i <= skuNumbers.length - 1; i++) {
  modelObject[skuNumbers[i]] = {};
}
PDFtext = PDFtext.substring(PDFtext.indexOf('Model Name'));
//instantiate object of row identifiers
var rowIdentifiers = [['Model Name', /\s*HPE\s*(.*?)\s*/g], ['Processor', /[\d\D]{22}/g], ['Number of Processors', ''], ['Memory', ''], ['Network Controller', ''], ['Storage Controller', ''], ['Hard Drive', ''], ['Internal Storage', ''], ['Optical Drive Bay', ''], ['Optical Drive', ''], ['PCI-Express Slots', ''], ['Power Supply', ''], ['Fans', ''], ['Management', ''], ['Energy Star', ''], ['Form Factor', ''], ['Warranty', '']];

//for each of the rowIdentifiers loop through the PDFText to find the index of the indentifier and the one that follows and save the string that is inbetween to the object of part numbers
// for (var i)
var firstIndex = text.indexOf(tester[0]) + tester[0].length;
var secondIndex = text.indexOf(tester[1]);
var descriptionsArray = text.substring(firstIndex, secondIndex).split(rowIdentifiers[i][1]);
var SKUindex = 0;
for (var i = 0; i <= descriptionsArray.length - 1; i++) {
  if (descriptionsArray[i].length) {
    modelObject[skuNumbers[SKUindex]][rowIdentifiers[i][0]] = descriptionsArray[i]; 
    SKUindex++;
  }
}



