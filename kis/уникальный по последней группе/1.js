// https://smd.mos.ru/participants/805596/view

https://smd.mos.ru/api/v1/participants/groups/805596



arrCandidate = ['721247']
// commits = [[],[]]
// commits[1] = []



groups_All = []
groups_ACTIVE = []








async function func1(idLesson_arr, ij){
    intId=parseInt(idLesson_arr,10)
    
    let url = `https://smd.mos.ru/api/v1/participants/groups/${intId}`;
    let response = await fetch(url);
    
    let url2 = `https://smd.mos.ru/api/v1/groups/participants/${intId}/active_groups/ids`;
    let response2 = await fetch(url2);
    
    
    groups_All = await response.json()
    groups_ACTIVE = await response2.json()
    await groups_All

    
    
      
    // commits[i] = await response.json() // читаем ответ в формате JSON
}

function f7(){arrCandidate.forEach((e,i) => 
func1(e,i)
    );
  }
  async function f8() {
    var x = await groups_ACTIVE;
    // commits[0][0] массив со всеми группами [ ]
    
    console.log("YES"); // 10
  }

var active_groups_i = 0
var groups_ACTIVE_TRUE= []
// commits[0][1] = []
let x,y
function func9(){
for (let i = 0; i < groups_All.length; i++) {
    if (groups_ACTIVE.includes(groups_All[i].id)) {//можно убрать эту ячейку, потом фильтр на (boolean)
        groups_ACTIVE_TRUE[active_groups_i] = groups_All[i]
    active_groups_i++
   }


//заменить в датах символы 12 и 45
}




// let x,y = new Date('0')
let ACTIVE_GROUP_FINAL = groups_ACTIVE_TRUE[0]
x=f_date_formated(ACTIVE_GROUP_FINAL.firstEnrollmentDate)
for (let index = 0; index < groups_ACTIVE_TRUE.length; index++)
{
y=f_date_formated(groups_ACTIVE_TRUE[index].firstEnrollmentDate)
// console.log(x,y)
console.log(x)
console.log(y)
    if(x>y)
   {x=y
    console.log(x)
    // { ACTIVE_GROUP_FINAL.firstEnrollmentDate=groups_ACTIVE_TRUE[index].firstEnrollmentDate
    // console.log (ACTIVE_GROUP_FINAL,groups_ACTIVE_TRUE[index].firstEnrollmentDate,x,y )
}
if (index+1 == groups_ACTIVE_TRUE.length){console.log(x)}

}
}

var needed_dateS_OBJ
function func10(){
groups_ACTIVE_TRUE.forEach((E,i)=>{
    // console.log((f_date_formated(E.firstEnrollmentDate)),"brc",x)
    if(+f_date_formated(E.firstEnrollmentDate) == +x){
    console.log("yes")
    needed_dateS_OBJ = E
    // return needed_dateS_OBJ
}

})}

let f_date_formated = (date=>{
    date_tmp = date.split(".")
  return  new Date(date_tmp[2],date_tmp[1]-1,date_tmp[0])
})

