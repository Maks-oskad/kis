

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

document.querySelectorAll(".participants-item__name-label").forEach((x,i) => {document.querySelectorAll(".participants-item__name-label")[i].remove()})
sleep(2000)


for (let index = 0; index <300; index++) {
    document.querySelectorAll(".participants-item__name-label")[index].remove()
}