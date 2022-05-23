// var  b;
// var grouppa
// var i,j;
// xhr = new XMLHttpRequest();
// xhr.open('GET', 
// `https://smd.mos.ru/api/v1/groups/${prompt()}/attendance?from=01.05.2022&to=31.05.2022`);

// var el = window.location.href
// var numEl = parseInt(el.match(/\d+/))

// xhr.onload = function() {
//     b = JSON.parse(xhr.responseText);
//     b.participants.forEach((e)=>{
//         i= 0
//         j = 0
//     if(e.id == numEl){ i= 0
//         e.lessons.forEach((e)=>{
//             //console.log(e)
//             if(e.presenceMark == "PRESENCE"){i++}
//             if(e.presenceMark =="DISMISSED"){j++}
//             if(e.presenceMark=="PRESENCE_EXCEEDS"){j++}
//             if(e.presenceMark=="ABSENT"){j++}
            
//     })

//     if((i>0)||(j>0)){console.log("+"+i+" -"+j)}

//     }    
//     });
// };
// xhr.send();





var  b;
var grouppa
var i,j;


function (wh){
    xhr = new XMLHttpRequest();
xhr.open('GET', 
`https://smd.mos.ru/api/v1/groups/${grouppa}/attendance?from=01.05.2022&to=31.05.2022`);

var el = window.location.href
var numEl = parseInt(el.match(/\d+/))

xhr.onload = function() {
    b = JSON.parse(xhr.responseText);
    b.participants.forEach((e)=>{
        i= 0
        j = 0
    if(e.id == numEl){ i= 0
        e.lessons.forEach((e)=>{
            //console.log(e)
            if(e.presenceMark == "PRESENCE"){i++}
            if(e.presenceMark =="DISMISSED"){j++}
            if(e.presenceMark=="PRESENCE_EXCEEDS"){j++}
            if(e.presenceMark=="ABSENT"){j++}
            
    })

    if((i>0)||(j>0)){console.log("+"+i+" -"+j)}

    }    
    });
};
xhr.send();










}
var c 
 document.querySelectorAll('.code-col').forEach((e)=>{
    grouppa = parseInt(e.innerText.match(/\d+/))

    ///////////////////////////////////////////////////////////////////////////////////////////
    
e.innerHTML += <button onclick="goToPage()">Go to Page</button>

)
///////////////////////////////////////////////////////////

ЭТО РАБОЧИЕ КНОПКИ
document.querySelectorAll('.code-col').forEach((e)=>{
    grouppa = parseInt(e.innerText.match(/\d+/))

   var cc = `"<button onclick="goToPage()">Go to Page</button>"` 
e.innerHTML =  e.innerHTML+cc
 }
)

// c.forEach((e)=>{ console.log(parseInt(e.innerText.match(/\d+/)))})

// parseInt(document.querySelectorAll('.code-col')[1].baseURI.match(/\d+/))



// .........
var i,j;
b.participants.forEach((e)=>{
    i= 0
    j = 0
if(e.id == 511574){ i= 0
    e.lessons.forEach((e)=>{
        //console.log(e)
        if(e.presenceMark == "PRESENCE"){i++}
        if(e.presenceMark =="DISMISSED"){j++}
        if(e.presenceMark=="PRESENCE_EXCEEDS"){j++}
        if(e.presenceMark=="ABSENT"){j++}
})
}    console.log(i, j)
});

