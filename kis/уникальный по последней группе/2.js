// async function f1() {
//     let element
//     for (let index = 0; index < 1000; index++) {
//      element = element*index
//         console.log(element)
//     }
//     for (let index = 0; index < 1000; index++) {
//         element = element*index
//            console.log(element)
//        }
    
// }
document.querySelector("#container > div > main > div > div > section > div > div > div.styled__StyledCardContent-sc-1ydsk2u-4.kMuiUc > div > div > div > div.ant-tabs-content.ant-tabs-content-no-animated.ant-tabs-top-content > div.ant-tabs-tabpane.ant-tabs-tabpane-active > div.styled__StyledGroupParticipants-sc-1bwumlj-0.eNwmlE > div.ant-table-wrapper.sc-hEsumM.main-participants-list.sc-bYSBpT.dhOsZB > div > div > div > div > div > table > thead > tr > th.ant-table-selection-column > div > div > label > span > input").click()

// https://smd.mos.ru/participants/805596/view

// https://smd.mos.ru/api/v1/participants/groups/805596
//https://smd.mos.ru/api/v1/groups/window.location.href.split("/")[4]/attendance?from=01.06.2022&to=30.06.2022 это надо превратить
let poshesheniya_All = []
async function funcPoshesheniya(){
let url = `https://smd.mos.ru/api/v1/groups/${window.location.href.split("/")[4]}/attendance?from=01.06.2022&to=30.06.2022`;
response= await fetch(url);
  poshesheniya_All = await response.json()
console.log("done")
poshesheniya_All.participants.forEach((e,i)=>{
  let lesson = 1
  for(let i=0; i<e.lessons.length; i++)
 { document.querySelectorAll(`[data-row-key="${e.id}"]`)[0].appendChild(document.createElement('a') ).innerText = `
 ${e.lessons[i].lessonDate}`

console.log("+")
  }
})

// poshesheniya_All.forEach.
// document.querySelectorAll(`[data-row-key="${intId}"]`)[0]
}








arrCandidate = ['721247']
// commits = [[],[]]
// commits[1] = []


let groupNAME = document.querySelector("#container > div > main > div > div > section > div.styled__StyledCardPageContent-sc-1ydsk2u-2.gfqwRV > div > div.sections__ContentSection-rzp5px-0.sc-hIVACf.fRrLZ > div.styled__StyledProfileInfo-sc-1pym2sp-0.ieNzNG > div > div > div > div:nth-child(1) > div").innerText.split("G-")[1]

groups_All = []
groups_ACTIVE = []
var active_groups_i = 0
var groups_ACTIVE_TRUE= []
// commits[0][1] = []
let x,y
let ACTIVE_GROUP_FINAL
var needed_dateS_OBJ
var needed_dateS_OBJ_arr=[]
let f_date_formated = (date=>{
    date_tmp = date.split(".")
  return  new Date(date_tmp[2],date_tmp[1]-1,date_tmp[0])
})


///////////////////////////////////
//////////////////////////////////////////
async function func1(idLesson_arr, ij){


    groups_All = []
    groups_ACTIVE = []
     active_groups_i = 0
    groups_ACTIVE_TRUE= []
    // commits[0][1] = []
     x,y=1
     ACTIVE_GROUP_FINAL=[]
     needed_dateS_OBJ={}
    needed_dateS_OBJ_arr=[]






    intId=parseInt(idLesson_arr,10)
    
    let url = `https://smd.mos.ru/api/v1/participants/groups/${intId}`;
    let response = await fetch(url);
    
    let url2 = `https://smd.mos.ru/api/v1/groups/participants/${intId}/active_groups/ids`;
    let response2 = await fetch(url2);
    
    
    groups_All = await response.json()
    groups_ACTIVE = await response2.json()
   
    funcPoshesheniya()

    for (let i = 0; i < groups_All.length; i++) {
        if (groups_ACTIVE.includes(groups_All[i].id)) {//можно убрать эту ячейку, потом фильтр на (boolean)
            groups_ACTIVE_TRUE[active_groups_i] = groups_All[i]
        active_groups_i++
       }}


       ACTIVE_GROUP_FINAL = groups_ACTIVE_TRUE[0]
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

       groups_ACTIVE_TRUE.forEach((E,i)=>{
        // console.log((f_date_formated(E.firstEnrollmentDate)),"brc",x)
        if(+f_date_formated(E.firstEnrollmentDate) == +x){
        console.log("yes")
        needed_dateS_OBJ = E
        needed_dateS_OBJ_arr[ij] = document.querySelectorAll(`[data-row-key="${intId}"]`)
        console.log(document.querySelectorAll(`[data-row-key="${intId}"]`))
        needed_dateS_OBJ_arr[ij][0].children[1].innerHTML+=`
    <br><a href="dog.html">${needed_dateS_OBJ.code}</a>
    <br>${needed_dateS_OBJ.territoryCentre.shortTitle}
    <br>${needed_dateS_OBJ.organization.shortTitle}
    
    `
    if(groupNAME == document.querySelectorAll(`[data-row-key="${intId}"]`)[0].children[1].children[3].innerText.split("G-")[1])
{document.querySelectorAll(`[data-row-key="${intId}"]`)[0].style.background = "#ffc000"
document.querySelectorAll(`[data-row-key="${intId}"]`)[0].children[0].children[0].children[0].click()}
    // document.querySelectorAll(`[data-row-key="${intId}"]`)


        // return needed_dateS_OBJ
    }
    // commits[i] = await response.json() // читаем ответ в формате JSON
})


}


arrCandidate.forEach((e,i) => {
    func1(e,i)
    
    // commits[0][0] массив со всеми группами [ ]
    
    console.log("YES"); // 10
})

// document.querySelectorAll(".ant-table-row-level-0").forEach((e,i)=>{awayt func1(e.dataset.rowKey)
    // document.querySelectorAll(".ant-table-row-level-0")[i].children[1].innerHTML+=`
    // <br><a href="dog.html">${needed_dateS_OBJ.code}</a>
    // <br>${needed_dateS_OBJ.territoryCentre.shortTitle}
    // <br>${needed_dateS_OBJ.organization.shortTitle}
    
    // `})
  queryAll =  document.querySelectorAll(".ant-table-row-level-0")
// for (let index = 0; index < queryAll.length; index++) {
//    func1(queryAll[index].dataset.rowKey,index)
  

// }

// async function processArray(array) {
//     for (const item of array) {
//       await func1(queryAll[index].dataset.rowKey,index);
//     }
//     console.log('Done!');
//   }
//   processArray(queryAll)

  
async function processArray(array) {
    for (const item of array) {
      await new Promise((resolve, reject) => {
        resolve(func1(item.dataset.rowKey))
      });
      console.log('Done!');
    }
    }
  
  processArray(queryAll)
