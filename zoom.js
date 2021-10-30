
// //открываем участников и 
// document.querySelector("#wc-footer > div > div.footer__btns-container > div:nth-child(2) > button").click()
// document.querySelector("#wc-container-left > div.meeting-info-container.meeting-info-container--left-side > button > i").click()
// ////////////////но сначала режим телефона/////////
// /////

// //селектор по 
// var namesToChange = document.querySelectorAll("li[role='application']")

// ////////////
// ///замена текста в каждой ячейке

// names.forEach((x, i) => { return
//     namesToChange[i].innerText = namesArr[i]
//      })


// namesToChange[i].innerText







var names = document.querySelectorAll(".participants-item__display-name")
var namesArr = []

names.forEach((x, i) => { return namesArr.push(names[i].innerText) })
namesArr.sort()


const textarea = document.createElement('textarea');
document.body.append(textarea);
textarea.value = namesArr.toString();
textarea.select();
document.execCommand('copy')




names.forEach((x, i) => { return namesArr.push(names[i].innerText) })

var namesToChange = document.querySelectorAll("li[role='application']")



///////////////////

var names2 = document.querySelectorAll("li[role='application']")

var namesArr2 = []


names2.forEach((x, i) => { return namesArr2.push(names2[i].textContent) })
namesArr2.sort()

namesToChange.forEach((t, i) => {namesToChange[i].querySelector(".participants-item__display-name").textContent = namesArr2[i]})