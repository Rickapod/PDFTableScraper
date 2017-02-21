//pull in txt file
var PDFtext = 'QuickSpecsHPE ProLiant DL560 Generation9 (Gen9)Pre-configured ModelsPage 16Performance ModelsBase Models[SKU Number]830073-B21 741066-B21 830072-B21741065-B21 Model NameHPE ProLiant DL560 Gen9 E5-4640v4 4P 128GB-R P840/4GB 16SFF 2x1200W RPS Perf ServerHPE ProLiant DL560 Gen9 E5-4640v3 4P 128GB-R P840/4GB 16SFF 2x1200W RPS Perf ServerHPE ProLiant DL560 Gen9 E5-4620v4 2P 64GB-R P440ar/2GB 8SFF 2x1200W RPS Base ServerHPE ProLiant DL560 Gen9 E5-4620v3 2P 64GB-R P440ar/2GB 8SFF 2x1200W RPS Base ServerProcessorIntel® Xeon® E5-4640v4Intel® Xeon® E5-4640v3Intel® Xeon® E5-4620v4Intel® Xeon® E5-4620v3Number of ProcessorsFourTwoMemory128GB (8x16GB Registered DIMMs, 2400 MHz)128GB (8x16GB Registered DIMMs, 2133 MHz)64GB (4x16GB Registered DIMMs, 2400 MHz)NOTE:24 DIMM slots available with Base Model; 2 more processor slots and 24 more DIMMs available via optional HPE ProLiant DL560 Gen9 CPU Mezzanine Board Kit (795107-B21).64GB (4x16GB Registered DIMMs, 2133 MHz)NOTE: 24 DIMM slots available with Base Model; 2 more processor slots and 24 more DIMMs available via optional HPE ProLiant DL560 Gen9 CPU Mezzanine Board Kit (795107-B21).Network ControllerHPE FlexFabric 10Gb 2P 533FLR-T AdapterStorage ControllerHPE Flexible Smart Array P840/4G ControllerNOTE:Additional stand up Storage controllers also available as options.HPE Flexible Smart Array P440ar/2GBNOTE:Additional stand up Storage controllers with up to 4GB FBWC available as options.Hard DriveNone ship standardInternal Storage 16 SFF Drive baysNOTE:Can be expanded up to a max of 24 SFF drives, with optional HPE ProLiant DL560 Gen9 Bay1 8SFF Cage/Backplane Kit (795085-B21). Alternatively, optional Universal Media Bay Kits may be chosen - with 2SFF drive bay (793479-B21) or without (795090-B21).8 SFF Drive BaysNOTE:Can be expanded up to a max of 24 SFF drives, with optional HPE ProLiant DL560 Gen9 Bay2 8SFF Cage/Backplane Kit (795084-B21) and HPE ProLiant DL560 Gen9 Bay1 8SFF Cage/Backplane Kit (795085-B21). Alternatively, optional Universal Media Bay Kits may also be chosen for Bay1 - with 2SFF drive bay (793479-B21) or without (795090-B21).Optical Drive BayOptional via Universal Media BayOptical DriveOptional DVD-ROM (726536-B21) or DVD-RW (726537-B21) via Universal Media Bay Kits (795090-B21 or 794379-B21)PCI-Express Slots7 PCIe 3.0 slots available; Secondary riser kit (793474-B21) installedPower Supply (2) HPE 1200W Common Slot Platinum Plus Hot Plug Power SuppliesFans6 hot plug fans, redundant  ManagementiLO Management (standard), Intelligent Provisioning (standard), iLO Advanced (standard), HPE OneView Advanced (standard)iLO Management (standard), Intelligent Provisioning (standard), iLO Advanced (optional, Insight Control (optional), HPE OneView (optional) Energy StarMeets Energy Star requirementsForm FactorRack (2U), HPE Easy Install Rails with CMAWarranty Server Warranty includes 3-Year Parts, 3-Year Labor, 3-Year Onsite support with next business day response';

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

//removes unecessary/no longer needed text to increase the effeciency of the application
PDFtext = PDFtext.substring(PDFtext.indexOf('Model Name'));

//instantiate object of row identifiers
  //DL560
var rowIdentifiers = [['Model Name', /(HPE.*?Server)/g], ['Processor', /(Intel.*?v[\d])/g], ['Number of Processors', /One|Two|Four/g], ['Memory', /([\d]{1,3}GB.*?[)])(.(?![\d]{1,3}GB))*/g], ['Network Controller'], ['Storage Controller', /(HPE(.(?!HPE))*.)/g], ['Hard Drive', /(None.*?)(.(?!None))*./g], ['Internal Storage', /([\d]{1,2}\s[\D]{3}\s[A-Z]*.*?)(.(?![\d]{1,2}\s[\D]{3}\s[A-Z]{1}))*./g], ['Optical Drive Bay', /(Not Available)|(O.*?[)])|(O.*?Bay)/g], ['Optical Drive', /(O.*?)(.(?!Opt))*./g], ['PCI-Express Slots'], ['Power Supply', /([(]\d[)])(.(?![(]\d[)]))*./g], ['Fans', /(\d)(.(?!\d))*./g], ['Management', /(iLO)([\d\D](?!iLO))*./g], ['Energy Star'], ['Form Factor', /(Rack)([\d\D](?!Rack))*./g], ['Warranty']];
  //DL380
// var rowIdentifiers = [['Model Name', /(HPE.*?Server)/g], ['Processor', /(Intel.*?v[\d])/g], ['Number of Processors', /One|Two|Four/g], ['Memory', /([\d]{1,3}GB.*?[)])(.(?![\d]{1,3}GB))*/g], ['Network Controller'], ['Storage Controller', /(HPE(.(?!HPE))*.)/g], ['Hard Drive', /(None.*?)(.(?!None))*./g], ['Internal Storage', /([\d]{1,2}\s[\D]{3}\s[A-Z]*.*?)(.(?![\d]{1,2}\s[\D]{3}\s[A-Z]{1}))*./g], ['Optical Drive Bay', /(Not Available)|(O.*?[)])|(O.*?Bay)/g], ['Optical Drive', /(O.*?)(.(?!Opt))*./g], ['PCI-Express Slots'], ['Power Supply', /([(]\d[)])(.(?![(]\d[)]))*./g], ['Fans', /(\d)(.(?!\d))*./g], ['Management', /(iLO)([\d\D](?!iLO))*./g], ['Form Factor', /(Rack)([\d\D](?!Rack))*./g], ['Warranty']];
  //DL360
// var rowIdentifiers = [['Model Name', /(HPE.*?Server)/g], ['Processor', /[^\D]{6}-[\w]{3}|(I.*?)(.(?!Int))*./g], ['Number of Processors'], ['Memory', /([\d]{1,3}GB.*?[)])(.(?![\d]{1,3}GB))*/g], ['Network Controller'], ['Storage Controller', /(HPE(.(?!HPE))*.)/g], ['Hard Drive', /(None.*?)(.(?!None))*./g], ['Internal Storage', /([\d]{1,2}\s[\D]{3}\s[A-Z]*.*?)(.(?![\d]{1,2}\s[\D]{3}\s[A-Z]{1}))*./g], ['Optical Drive Bay', /(Not Available)|(O.*?[)])|(O.*?Bay)/g], ['PCI-Express Slots'], ['Power Supply'], ['Fans'], ['Management'], ['Form Factor'], ['Warranty']];

//for each of the rowIdentifiers loop through the PDFText to find the index of the indentifier and the one that follows and save the string that is inbetween to the object of part numbers
// for (var i = 0; i <= rowIdentifiers.length - 1; i++) {
for (var i = 0; i < rowIdentifiers.length; i++) { 
  var firstIndex = PDFtext.indexOf(rowIdentifiers[i][0]) + rowIdentifiers[i][0].length;
  var secondIndex;
  var descriptionsArray;
  if (rowIdentifiers[i + 1]) {
    // console.log('here at + 1')
    secondIndex = PDFtext.indexOf(rowIdentifiers[i + 1][0]);
    if (rowIdentifiers[i][1]) {
      descriptionsArray = PDFtext.substring(firstIndex, secondIndex).match(rowIdentifiers[i][1]);
    } else { descriptionsArray = [PDFtext.substring(firstIndex, secondIndex)]; }
  } else {
    // console.log('end of array');
    descriptionsArray = PDFtext.substring(firstIndex).match(rowIdentifiers[i][1]);
  }
  console.log(PDFtext.substring(firstIndex, secondIndex));
  console.log(descriptionsArray);

  var index = 0;
  if (descriptionsArray.length > 1) {
    for (keys in modelObject) {
      if (descriptionsArray[index]) {
        modelObject[keys][rowIdentifiers[i][0]] = descriptionsArray[index];
        index++;
      } else {
        modelObject[keys][rowIdentifiers[i][0]] = '';
      }
    }
  } else {
    for (keys in modelObject) {
      modelObject[keys][rowIdentifiers[i][0]] = descriptionsArray[0];
    }
  }
}
console.log(modelObject);



