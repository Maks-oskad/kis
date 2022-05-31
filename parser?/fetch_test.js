









let id
let commits = []

function(i,j){
for(; i< j;i++)

{

let url = `https://smd.mos.ru/api/v1/groups/${i}`;
let response = await fetch(url);

commits[i] = await response.json(); // читаем ответ в формате JSON
}}
alert(commits[0].author.login);