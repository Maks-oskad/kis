let commits = []
async function func1(idLesson_arr, i){
    intId=parseInt(idLesson_arr,10)
    
    let url = `https://smd.mos.ru/api/v1/groups/${intId}/attendance?from=01.06.2022&to=14.06.2022`;
    let response = await fetch(url);
    
    commits[i] = await response.json()
    // commits[i] = await response.json() // читаем ответ в формате JSON
}
