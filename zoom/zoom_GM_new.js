// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://stackoverflow.com/questions/6392103/storing-into-file-using-javascript-greasemonkey
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant       unsafeWindow
// @require     https://raw.githubusercontent.com/eligrey/FileSaver.js/master/FileSaver.js
// ==/UserScript==
 
 
 document.querySelector(".ax-outline-blue").onclick
 


 document.querySelector(".ax-outline-blue").onclick

  var list = document.querySelector("ul#participants-ul.participants-ul")

  var itemsArr = [...list.children]
    .sort((a,b)=>a.innerText>b.innerText?1:-1)
    .forEach(node=>list.appendChild(node));


  
    var names = document.querySelectorAll(".participants-item__display-name")
    var namesArr = []
    
    names.forEach((x, i) => { return namesArr.push(names[i].innerText) })

    const textarea = document.createElement('textarea');
    document.body.append(textarea);
    textarea.value = namesArr.toString();
    textarea.select();
    document.execCommand('copy')
    


    //FIX кнопка щита 
    setInterval(() => {if(document.querySelector(".ax-outline-blue").getAttribute("aria-expanded")=='false'){ document.querySelector(".ax-outline-blue").click()}}, 2000);





    document.querySelector(".footer-button__button ").click()

    setInterval(() => {

      if(document.querySelector(".footer-button__button ").getAttribute("aria-label")=='close the participants list pane'){
        document.querySelector(".footer-button__button ").click()
      }





    }            
    
    , 2000);


    var saveData = (function () {
      var a = document.createElement("a");
      document.body.appendChild(a);
      a.style = "display: none";
      return function (data, fileName) {
          var blob = new Blob([data], {type: "octet/stream"});
          var url = window.URL.createObjectURL(blob);
          a.href = url;
          a.download = fileName;
          a.click();
          window.URL.revokeObjectURL(url);
      };
  }());
  
  unsafeWindow.saveData =saveData;

saveData(namesArr.toString(), "file.txt");

saveData("this data will be written in the file", `${new Date().toLocaleString().slice(0,17)}.txt`);
// var list = document.getElementById('mylist');

// var items = list.childNodes;
// var itemsArr = [];
// for (var i in items) {
//     if (items[i].nodeType == 1) { // get rid of the whitespace text nodes
//         itemsArr.push(items[i]);
//     }
// }

// itemsArr.sort(function(a, b) {
//   return a.innerHTML == b.innerHTML
//           ? 0
//           : (a.innerHTML > b.innerHTML ? 1 : -1);
// });

// for (i = 0; i < itemsArr.length; ++i) {
//   list.appendChild(itemsArr[i]);
// }

// //ES6 syntax
// var parentAll = document.querySelector("ul#participants-ul.participants-ul")

// var list = parentAll

// var itemsArr = [...list.children]
//   .sort()
//   .sort((a,b)=>a.innerText>b.innerText?1:-1)
//   .forEach(node=>list.appendChild(node));
