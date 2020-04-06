import * as convert from "xml-js";
import * as fs from "fs";




fs.readFile('demofile1.html', function(err, data) {

})


const xml =
'<?xml version="1.0" encoding="utf-8"?>' +
'<note importance="high" logged="true">' +
'    <title>Happy</title>' +
'    <todo>Work</todo>' +
'    <todo>Play</todo>' +
'</note>';
const result1 = convert.xml2json(xml, {compact: true, spaces: 4});
const result2 = convert.xml2json(xml, {compact: false, spaces: 4});
console.log(result1, '\n', result2);