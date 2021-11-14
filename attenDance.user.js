// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://smd.mos.ru/groups/2032230/attendance
// @icon         https://www.google.com/s2/favicons?domain=mos.ru
// @grant       unsafeWindow
// ==/UserScript==



document.querySelector("#container > div > main > div > header").innerHTML+=
`<button style="color:white; background-color:#10b072" onclick = "attenDance()">Нажми меня</button>`




function attenDance(params) {


var lines, colunns, headerQuery;
var tablica = ["ФИО",0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]

//lines start`s at 0
lines = document.querySelectorAll("#container > div > main > div > div > section > div > div > div.styled__StyledCardContent-sc-1ydsk2u-4.kMuiUc > div > div > div > div.ant-tabs-content.ant-tabs-content-no-animated.ant-tabs-top-content > div.ant-tabs-tabpane.ant-tabs-tabpane-active > div.ant-spin-nested-loading > div > div > div > div > div.styled__StyledCardContent-sc-123jlgd-3.eEOoJL > div.ant-table-wrapper.sc-hEsumM.sc-bYwvMP.bBBBXy > div > div > div > div > div.ant-table-scroll > div > table > tbody > tr:nth-child(n)")

// (function (params) {console.log(":EN")

// })()
// ??colunns lines[0].children[1].children[1].classList.contains("anticon-plus")
for (var i_line=0;i_line<lines.length; i_line++) {
    for(var i_child=1; i_child < lines[i_line].childElementCount; i_child++ )
    {
        try {
            if (lines[i_line].children[i_child].children[1].classList.contains("anticon-plus")) {
                console.log("+", i_line, i_child,tablica[i_child]);
                tablica[i_child]+=1;
            }
        }
        catch (error) {
        console.log(error)
        }
    }
}
    // lines[2].children[1]
    headerQuery = document.querySelectorAll(".ant-table-thead > tr >:nth-child(n)")



    for (let index = 0; index < 30; index++) {
        headerQuery[index].innerHTML += `<h1 style="color:#10b072; background-color: #d5d9db">${tablica[index]}</h1>`
        console.log(typeof(index))
    }
}
unsafeWindow.attenDance =attenDance;