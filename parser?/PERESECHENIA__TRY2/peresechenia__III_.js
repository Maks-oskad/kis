let commits = []
async function func1(idLesson_arr, i){
    intId=parseInt(idLesson_arr,10)
    
    let url = `https://smd.mos.ru/api/v1/groups/${intId}/attendance?from=01.06.2022&to=14.06.2022`;
    let response = await fetch(url);
    
    commits[i] = await response.json()
    // commits[i] = await response.json() // читаем ответ в формате JSON
}


G-02034255
G-02042934
G-02044066
G-02042549
G-02042552
G-02035471
G-02035247
G-02035453




///////////////1
let DB = {}
lessons_my_arr_prompt = prompt("кода групп")
lessons_my_arr_prompt = lessons_my_arr_prompt.replaceAll("G-","").replaceAll(/[+\r+\,]+/g,'').split("\n")

lessons_my_arr_prompt.forEach((e,i) => {
    BOOK12(e,i)
})
async function BOOK12(e,i){
        let intId=parseInt(e)
        let url = `https://smd.mos.ru/api/v1/groups/${intId}/attendance?from=01.06.2022&to=30.06.2022`
        let response = await fetch(url);
        DB[`${intId}`] = await response.json()
        DB[`${intId}`].howmuch = 0
        DB[`${intId}`].ID = intId
    };

/////////2
    Object.keys(DB).map(function(objectKey, index) {
   
        console.log(objectKey);
        DB[objectKey].lessons.forEach((e,i)=>{
            console.log(objectKey);
            console.log(e);
            DB[e.id] = []
            DB[e.id][0] = objectKey
            DB[e.id][1] = e.lessonDate
            DB[e.id][2] = 0
        })
       
        DB[objectKey].participants.forEach((e,i)=>{
            e.lessons.forEach(e=>{
                if(e.presenceMark == "PRESENCE" ){
                    DB[DB[e.id][0]].howmuch++ 
                    DB[e.id][2]+=1
                }
            })
        })

        });

        
/////////////////



});





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

