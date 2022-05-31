let id
let commits = []

async function fifu(i,j){
for(; i< j;i++)

{

let url = `https://smd.mos.ru/api/v1/groups/${i}`;
let response = await fetch(url);
console.log("+")
commits[i] = await response.json(); // читаем ответ в формате JSON
}}

fifu(234,236)

////////////////
//  NEED PAUSE???????? WTF //TODO
////////////////



let batadata = JSON.stringify(commits)


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
  saveData(batadata, 
    `${new Date().toLocaleString().slice(0,17) +document.title}.JSON`)