var  b
xhr = new XMLHttpRequest();
xhr.open('GET', 
`https://smd.mos.ru/api/v1/groups/0203269/attendance?from=01.05.2022&to=31.05.2022`);
xhr.onload = function() {
    b = JSON.parse(xhr.responseText);
};
xhr.send();

var i,j;
b.participants.forEach((e)=>{
    i= 0
    j = 0
if(e.id == 511574){ i= 0
    j = 0
    e.lessons.forEach((e)=>{
        //console.log(e)
        if(e.presenceMark == "PRESENCE"){i++}
        if(e.presenceMark =="DISMISSED"){j++}
        if(e.presenceMark=="PRESENCE_EXCEEDS"){j++}
        if(e.presenceMark=="ABSENT"){j++}
})
}    console.log(i, j)
})

