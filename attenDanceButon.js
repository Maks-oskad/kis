var htmlHeader = document.getElementsByTagName("head")[0];         
var myScript = document.createElement('script');
myScript.type = 'text/javascript';
myScript.src = 'myscriptlocation.js';
htmlHeader.appendChild(myScript);