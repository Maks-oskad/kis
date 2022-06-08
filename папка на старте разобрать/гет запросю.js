};
// xhr.send();





var  b;
var grouppa,grouppa3
var i,j;h = 0


function ddd (grouppa){
    
    xhr = new XMLHttpRequest();
xhr.open('GET', 
`${grouppa}`);

var el = window.location.href
var numEl = parseInt(el.match(/\d+/))

xhr.onload = function() {
    b = JSON.parse(xhr.responseText);
    

    }    
    
    xhr.send();
};
 
// ////id людей по группе
// ddd("https://smd.mos.ru/api/v1/groups/participants/2034255?")
// let array_b = []
// b.forEach((e)=>{array_b.push(e.id)})

// ///////группы
// ddd("https://smd.mos.ru/api/v1/participants/groups/2907619")
// for each b.id



// https://smd.mos.ru/api/v1/groups/2042934/attendance?from=01.05.2022&to=31.05.2022

ddd("https://smd.mos.ru/api/v1/groups/2042934/attendance?from=01.05.2022&to=31.05.2022")
b.participants.forEach((e)=>{
    e.Lessons.forEach((e)=>{
        
    b.id = e.id;
    b.id.fio = e.fio;
        if(e.PresenceMark=="PRESENCE" ||
            e.presenceMark=="PRESENCE_EXCEEDS"){
                b.Lessons.e

            }
        })
