


// let id,intId 
// let commits,Dates = []
// idLesson_arr = ["2039274","2039275"]

// async function func1(idLesson_arr){
// for(let i = 0; i<idLesson_arr.length ;i++){

// intId=parseInt(idLesson_arr[1],10)

// let url = `https://smd.mos.ru/api/v1/groups/${intId}/attendance?from=01.04.2022&to=31.04.2022`;
// let response = await fetch(url);
// commits[i] = await response.json(); // читаем ответ в формате JSON
// }}






let id,intId
let commits = []
idLesson_arr = ["2039274","2039275"]

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