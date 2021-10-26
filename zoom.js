
var names = document.querySelectorAll(".participants-item__display-name")
var namesArr = []

names.forEach((x, i) => { return namesArr.push(names[i].innerText) })
namesArr.sort()


const textarea = document.createElement('textarea');
document.body.append(textarea);
textarea.value = namesArr.toString();
textarea.select();
document.execCommand('copy')