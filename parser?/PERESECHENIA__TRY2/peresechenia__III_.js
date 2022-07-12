let commits = []
async function func1(idLesson_arr, i){
    intId=parseInt(idLesson_arr,10)
    
    let url = `https://smd.mos.ru/api/v1/groups/${intId}/attendance?from=01.06.2022&to=14.06.2022`;
    let response = await fetch(url);
    
    commits[i] = await response.json()
    // commits[i] = await response.json() // читаем ответ в формате JSON
}


let DB = []
lessons_my_arr_prompt = prompt("кода групп")
lessons_my_arr_prompt = lessons_my_arr_prompt.replaceAll("G-","").replaceAll(/[+\r+\,]+/g,'').split("\n")

lessons_my_arr_prompt.forEach((e,i) => {
    BOOK12(e,i)
})
async function BOOK12(e,i){
        let intId=parseInt(e)
        let url = `https://smd.mos.ru/api/v1/groups/${intId}/attendance?from=01.06.2022&to=30.06.2022`
        let response = await fetch(url);
        DB[i] = await response.json()
        
    };


DB.forEach((e,i)=>{
    DB[4].lessons.forEach((e1,i1)=>{
       DB[4].lessons[i1].howmuch = 0
    
        DB[4].participants.forEach((e1,i1)=>{
            e1.lessons.forEach((e2,i2)=>{
                if(e.presenceMark == "PRESENCE" ){
                    [e.id]
                }
            })
        })
    })
})

DB_lessons = {}
DB[4].lessons.forEach((e,i)=>{
    i++
    DB_lessons[`${i}`] = e
})