xhr = new XMLHttpRequest();
xhr.open('GET', `https://smd.mos.ru/api/v1/groups/2038005/attendance?from=01.05.2022&to=31.05.2022`);
xhr.onload = function() {
    console.log(xhr.responseText);
};
xhr.send();
a = xhr.responseText
b = JSON.parse(a)

b.participants.forEach((e)=>{

if(e.id == 544718){
    
}    
console.log(e)})
