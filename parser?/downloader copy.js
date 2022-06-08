let arrZapros, strZapros, arrZaprosFormated
//запрос ввода данных
arrZapros = prompt(`

------------------------------------------------------
КАКИЕ ГРУППЫ СВЕРЯТЬ НА ПЕРЕСЕЧЕНИЕ?
------------------------------------------------------
(не обязательно указывать те группы которые пересекаются
скрипт найдет эти группы сам)
------------------------------------------------------`,`G-02043524
G-00003101
G-02046663`)
//форматирование
// arrZapros.replace(/[\r+\,]+/g,'')
arrZapros = arrZapros.replaceAll("G-","").replaceAll(/[+\r+\,]+/g,'')
arrZaprosFormated = arrZapros.split("\n")
arrZaprosFormated.map((e)=>{
parseInt(e,10)
})

let id,intId
let commits = []
let idLesson_arr = arrZaprosFormated ///["2039274","2039275"]
let my_base = {}

///////////////////////////////////////






let commitsGROUPS,arr = []


async function fifu(arr){
for(let i; i< arr.length;i++)

{intId=parseInt(arr[i],10)

let url = `https://smd.mos.ru/api/v1/groups/${intId}`;
let response = await fetch(url);
console.log("+")
commitsGROUPS[i] = await response.json(); // читаем ответ в формате JSON
}
resolve
}



fifu(arrZaprosFormated)

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
    