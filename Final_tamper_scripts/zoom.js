// ==UserScript==
// @name         ZOOM_NEW
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        *.zoom.us/w*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        unsafeWindow
// @require
// ==/UserScript==

function func1() {
    console.log("OK OK OK")
    document.querySelector(".ax-outline-blue").click()
    document.querySelector(".footer-button__button ").click()
  
  
        //FIX кнопка щита
        setInterval(() => {if(document.querySelector(".ax-outline-blue").getAttribute("aria-expanded")=='false'){ document.querySelector(".ax-outline-blue").click()}}, 2000);
  
        setInterval(() => {if(document.querySelector(".footer-button__button ").getAttribute("aria-label")!='close the participants list pane'){
            document.querySelector(".footer-button__button ").click()
          }},2500);
  
  
  
  
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
  
  
  namesArr.join(",").replace(/[,]+/g,`
                             \n`)
    console.log(namesArr)
    setTimeout((saveData(namesArr, `${new Date().toLocaleString().slice(0,17) +document.title}.txt`)), 5000);
  
  
  
  
    };
  if (confirm("Включить скрипт?")){
    unsafeWindow.func1 = func1;
    // setTimeout(saveData, 5000, "Привет");
     setTimeout(func1, 6000, "Привет");}