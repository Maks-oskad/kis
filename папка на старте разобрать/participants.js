// ==UserScript==
// @name         participants
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://smd.mos.ru/participants/*/view
// @icon         https://www.google.com/s2/favicons?domain=mos.ru
// @grant       unsafeWindow
// ==/UserScript==


if (yesitsme==1)
document.querySelector("#container > div > main > div > header").innerHTML+=
`<button style="color:white; background-color:#10b072" onclick = "attenDance()">Нажми меня</button>`

function yaz2(params) {
document.querySelectorAll(".ant-tabs-tab")[1].click()
}

unsafeWindow.yaz2 =yaz2;

function yaz(params) {
    for( let i = 0; i<document.querySelectorAll(".ant-switch").length; i++){document.querySelectorAll(".ant-switch")[i].click()}
}

unsafeWindow.yaz =yaz;

setTimeout(yaz2, 8000, "Привет", "Джон");
setTimeout(yaz, 11000, "Привет", "Джон");