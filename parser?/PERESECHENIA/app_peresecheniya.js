
let arrZapros, strZapros, arrZaprosFormated



//запрос ввода данных
arrZapros = prompt(`

------------------------------------------------------
КАКИЕ ГРУППЫ СВЕРЯТЬ НА ПЕРЕСЕЧЕНИЕ?
------------------------------------------------------
(не обязательно указывать те группы которые пересекаются
скрипт найдет эти группы сам)
------------------------------------------------------`,`G-00005657
G-02043344`)
//форматирование
// arrZapros.replace(/[\r+\,]+/g,'')
arrZapros = arrZapros.replaceAll("G-","").replaceAll(/[+\r+\,]+/g,'')
arrZaprosFormated = arrZapros.split("\n")
arrZaprosFormated.map((e)=>{

parseInt(e,10)
})




let id,intId
let commits = []
idLesson_arr = arrZaprosFormated ///["2039274","2039275"]

function pereborMassiva(idLesson_arr){
    for(let i = 0; i<idLesson_arr.length ;i++){
        func1(idLesson_arr[i], i)
        }}

async function func1(idLesson_arr, i){
    intId=parseInt(idLesson_arr,10)

    let url = `https://smd.mos.ru/api/v1/groups/${intId}/attendance?from=01.04.2022&to=31.04.2022`;
    let response = await fetch(url);
    commits[i] = await response.json(); // читаем ответ в формате JSON
    }

pereborMassiva(idLesson_arr)