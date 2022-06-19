
let arrZapros, strZapros, arrZaprosFormated
//запрос ввода данных
arrZapros = prompt(`

------------------------------------------------------
КАКИЕ ГРУППЫ СВЕРЯТЬ НА ПЕРЕСЕЧЕНИЕ?
------------------------------------------------------
(не обязательно указывать те группы которые пересекаются
скрипт найдет эти группы сам)
------------------------------------------------------`,`G-02043524
G-00003101
G-02046663
G-02035347
G-02036637
G-00003101
G-02037888
G-02038427
G-02043343
G-02044109
G-02035458
G-02044066
G-00002734
G-02044111
G-02048329
G-02032419
G-00000546
G-02038438
G-02043345
G-02046663
G-02035446
G-02044108
G-02043348
G-02045066
G-02046127
G-02036744
G-02044232
G-02044093
G-02043524
G-02043346
G-02046130
G-02037480
G-02043735
G-02043351
G-02044105
G-02046639
G-02042968
G-02039270
G-02043764
G-02042552
G-02035022
G-02037238
G-02036975
G-02035471
G-00005657
G-00002737
G-02038429
G-02042549
G-02035247
G-02025943
G-02035749
G-02032416
G-02038437
G-02029292
G-02012658
G-02025948
G-02042554
G-02035548
G-02033716
G-02025947
G-02037180
G-02034255
G-02044091
G-02038433
G-02038430
G-02036980
G-02037118
G-02035453
G-02032417
G-02037156
G-02039274
G-02043344
G-02046672
G-02042934
G-02043491
G-02044090
G-02046586
G-02043338
G-02052498
G-02043350
G-02043339
G-02043347
G-02043340
G-02043349
G-02043353
G-02044107
G-02042966
G-02043737
G-02043736
G-02042964
G-02044086
G-02046129
G-02048275
G-02048423
G-02048424
G-02046654
G-02048331
G-02047374
G-02048379
G-02048420
G-02048426
G-02048428
G-02048706
G-02048710
G-02049039
G-02052092
G-02048418
G-02048419
G-02044238
G-02052500
G-02052764
G-02052732`)
//форматирование
// arrZapros.replace(/[\r+\,]+/g,'')
arrZapros = arrZapros.replaceAll("G-","").replaceAll(/[+\r+\,]+/g,'')
arrZaprosFormated = arrZapros.split("\n")
arrZaprosFormated.map((e)=>{
parseInt(e,10)
})

let id,intId
let commits = []
let idLesson_arr = arrZaprosFormated ///["2039274","2039275"]
let my_base = {}


function pereborMassiva(idLesson_arr){
    for(let i = 0; i!=idLesson_arr.length ;i++){
        func1(idLesson_arr[i], i)
        console.log('get')
        }}
        
        async function func1(idLesson_arr, i){
            intId=parseInt(idLesson_arr,10)
            
            let url = `https://smd.mos.ru/api/v1/groups/${intId}/attendance?from=01.06.2022&to=14.06.2022`;
            let response = await fetch(url);
            
            commits[i] = await response.json()
            // commits[i] = await response.json() // читаем ответ в формате JSON
        }
        
        pereborMassiva(idLesson_arr)
        
        
        let timerId = setInterval(() =>{ 
    if (commits.length == arrZaprosFormated.length){
        console.log(commits)
        console.log(arrZaprosFormated)
        clearInterval(timerId)
        func3()//AEEEEEEEEEEEEE
    }
}, 5000)

function func3(){
    // Object.assign(my_base, arrZaprosFormated)
    // console.log (my_base)
    commits.forEach((e,i)=>{e.id = arrZaprosFormated[i]
        e.lessons.forEach(element => {
            element.idGroup = arrZaprosFormated[i]
            
        });
        e.participants.forEach((e2,i2)=>{
            e2.lessons?.forEach((e3, i3)=>{
                Object.assign(commits[i].participants[i2].lessons[i3], {idG:commits[i].id})
            })
        })
        // e.candidates.forEach((e2,i2)=>{
        //     e2.lessons?.forEach((e3, i3)=>{
        //         Object.assign(commits[i].participants[i2].lessons[i3], {idG:commits[i].id})
        //     })
        // })          CANDIDATES         CANDIDATES         CANDIDATES         CANDIDATES         CANDIDATES         CANDIDATES    
    })
}



// commits.forEach((e1, i1)=>{
//     e1.participants.forEach((e2,i2)=>{
//         e2.lessons?.forEach((e3, i3)=>{
//             Object.assign(commits[i1].participants[i2].lessons[i3], {id:commits[i1].id})
//         })
//     })
// })
////////////////////////////////////222222222222222222222222222222222
////////////////////////////////////222222222222222222222222222222222
////////////////////////////////////222222222222222222222222222222222


let SRAVNIVAEM = []
let LESSONS = []
// подсчет общего числа уроков
let total_length = 0

function func4 (){commits.forEach((e)=>{ 
    total_length += e.lessons.length
    e.lessons.forEach((e)=>{ 
        LESSONS.push(e)   
    })
})}
////////////////////////////////////////2.12.1 2.12.1 2.1 2.1  2.1  2.1  2.1 перенес позже
func4()                  


test_obj = []

for(i=0; i<=LESSONS.length;i++){
// let e1 =LESSONS[i]
    // console.log('start', LESSONS[i])
    // console.log(LESSONS[i2], LESSONS[i])
for(i2=0; i2<LESSONS.length;i2++){
console.log(LESSONS[i2], LESSONS[i], i,i2)
    if((LESSONS[i]!=LESSONS[i2])&&(LESSONS[i].lessonDate==LESSONS[i2].lessonDate)){
        console.log("try", LESSONS[i2])
        let x11,x12,x21,x22 ="x"
x11 = parseInt((LESSONS[i].timeFrom.split(":").join("")))
x12 = parseInt((LESSONS[i].timeTo.split(":").join("")))
x21 = parseInt((LESSONS[i2].timeFrom.split(":").join("")))
x22 = parseInt((LESSONS[i2].timeTo.split(":").join("")))
console.log(` ${x11}   ${x12} ${x21} ${x22}
${LESSONS[i].timeFrom } \  ${LESSONS[i].timeTo}  \ ${LESSONS[i2].timeFrom}  \ ${LESSONS[i2].timeTo}`)
        if(((x11<x21)&&(x21<x12))
        ||((x21<x12)&&(x12<x22))||(x11==x21)||(x12==x22)){
            // test_obj[i] = {}

test_obj[i] =  {
                    a:{ lesson: LESSONS[i].id,g: LESSONS[i]},
                    b:{ lesson: LESSONS[i2].id,g: LESSONS[i2]} 
                }
//             Object.defineProperty(test_obj, i, {
//                 value: {
//                     a:{ lesson: LESSONS[i].id,g: LESSONS[i]},
//                     b:{ lesson: LESSONS[i2].id,g: LESSONS[i2]}
//                 },
//                 writable: true,
//                 enumerable: true,    // логическое значение (по умолчанию false)
// configurable: true,   // логическое значение (по умолчанию false)

//               });
            console.log("end", LESSONS[i2], "+++++++++++++++++++++++++")
            
        }
        
    }


    }

}
//////////////////////////////////////////////////////////////
for (let index = 0; index < LESSONS.length; index++){console.log(test_obj[index])}

test_obj.filter(Boolean).forEach((e,i)=>{test_obj.filter(Boolean).forEach((e2,i2)=>
    {if((e.a.lesson==e2.b.lesson)&&(e.b.lesson==e2.a.lesson))
    { test_obj[i]= undefined;console.log("-")}console.log(e.a, e2.b,e.b,e2.a)})})
    test_obj = test_obj.filter(Boolean)

let batadata = JSON.stringify(commits)


      var saveData = (function () {
        var a = document.createElement("a");
        document.body.appendChild(a);
        a.style = "display: none";
        return function (data, fileName) {
            var blob = new Blob([data], {type: "octet/stream"});
            var url = window.URL.createObjectURL(blob);
            a.href = url;
            a.download = fileName;
            a.click();
            window.URL.revokeObjectURL(url);
        };
    }());
  

// 333333333333333333333333333333333







    arrMASS = []
    let not_finded_tesOBJ,howMatch,swicher
    let cashID

    ////////////////////////////////////////////

    commits.forEach((e1,i1)=>{e1.participants.forEach((e2,i2)=>{arrMASS.push(e2)})})
    // commits.forEach((e1,i1)=>{e1.candidates?.forEach((e2,i2)=>{arrMASS.push(e2); console.log(e2, "candidates")})})
    // CANDIDATES         CANDIDATES         CANDIDATES         CANDIDATES         CANDIDATES         CANDIDATES         CANDIDATES         CANDIDATES    
    

// for (const [key,val] of commits) {

    
// }

    // arrMASS.filter(Boolean).forEach((e,i)=>{
    //     arrMASS.filter(Boolean).forEach((e2,i2)=>{
    //         if(e.id==e2.id){
    //             if(i1!==i2){
                   
    //                try {                   
    //                 for(let i3 = 0; i<arrMASS[i2].lessons.length; i3++){
    //                     arrMASS[i].lessons.push(arrMASS[i2].lessons[i3])
    //                 }
                    
                    
    //                 arrMASS[i2]= undefined
    //             console.log("+")
                    
    //                } catch (error) {
                    
    //                }
                   

    //         }
    // }})
    // })
    for(let i = 0; i<arrMASS.length;i++){
        arrMASS[i].i = i}

for (let i1 = 0; i1 <= arrMASS.length; i1++) {
    i2= 0
    for (let i2 = 0; i2 <= arrMASS.length; i2++) {
  if((arrMASS[i1])&&(arrMASS[i2])){
        if((arrMASS[i1].id)==(arrMASS[i2].id)){
            console.log(i1,i2)
            if(arrMASS[i1].i != arrMASS[i2].i){

                console.log(i1, i2)
                
                arrMASS[i1].lessons = arrMASS[i1].lessons.concat(arrMASS[i2].lessons);
                console.log( arrMASS[i1].lessons,arrMASS[i2].lessons )
                
                
                arrMASS[i2] = undefined
            }
    }
}
    }
    
    
}  
arrMASS = arrMASS.filter(Boolean)


OBJ_test_solo ={}
arr_test_solo1=[]
arr_test_solo2=[]

let onneeee1 ={}
let onneeee2 ={}

////////////////////////////////////////////
let i=0
arrMASS.forEach((e1,i1)=>{
//каждый человек
// if (i<100){dkdlm()}

arr_test_solo1.splice(0,arr_test_solo1.length)
// arr_test_solo1 = [] //lessons

    e1.lessons?.forEach((e2,i2)=>{
//каждый урок
arr_test_solo1.push(e2.id)
})


test_obj.forEach((e11,i11)=>{
        arr_test_solo2.splice(0,arr_test_solo2.length) //a,b
        
        arr_test_solo2.push(e11.a.lesson)
        arr_test_solo2.push(e11.b.lesson)
        
        if((arr_test_solo1.includes(arr_test_solo2[0]))&&(arr_test_solo1.includes(arr_test_solo2[1]))){
            // console.log(arr_test_solo1,arr_test_solo2) 
            let one = arr_test_solo1.indexOf(arr_test_solo2[0])
            let two = arr_test_solo1.indexOf(arr_test_solo2[1])
            onneeee1=arrMASS[i1].lessons[one]
            onneeee2=arrMASS[i1].lessons[two]
            OBJ_test_solo[i11]=([onneeee1, onneeee2])
            // Object.assign(OBJ_test_solo[e11], {onneeee1, onneeee2})
            // if((arrMASS[i1].lessons[one].presenceMark == "PRESENCE")&&(arrMASS[i1].lessons[two].presenceMark == "PRESENCE")){
                
                //     console.log(arrMASS[i1].lessons[one], arrMASS[i1].lessons[two], arrMASS[i1].fio) 
                //     i++
                //     // arrMASS[i1].lessons[one].id=i
                // }
            }
            
        })
        console.log("+")
})


})












//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////
arr_FINAAAAAAAAAAL = []






////////////////////////////////////////////
arrMASS.forEach(e1=>{swicher=0
    e1.lessons.forEach(e=>{

    for (let i1 = test_obj.length-100; i1 < test_obj.length; i1++) 
    
    if(swicher<1){
        if((e.id==test_obj[i1].a.g.id)||(e.id==test_obj[i1].b.g.id)){
            if (e.id==test_obj[i1].a.g.id){
                not_finded_tesOBJ = test_obj[i1].b.g.id }
            else{
                not_finded_tesOBJ = test_obj[i1].a.g.id}
    // console.log("e.id first^:", e.id)
    console.log("+")
    cashID = e.id
    swicher = 1
}
}else     if(swicher=1){
    if (e.id==not_finded_tesOBJ)
    {
        console.log("e.id sec^:", e.id, e1.fio)
        arr_FINAAAAAAAAAAL.push(e.id)
    }

                                                                    }


})})



























let arrFINAL = []

test_obj.forEach((t,i)=>{
    commits.forEach((c2,i2)=>{
        continue
        c2.participants.forEach((p3,i3)=>{
            p3.lessons.forEach((l4,i4)=>{
                console.log("lessons")
            })
        })
        
    })
    console.log(arrFINAL)})
    
    let find1 = {}
    let itterations = 0
    for (let i1 = 0; i1 < test_obj.length; i1++) {
        if(i2==1)break
        for (let i2 = 0; i2 < commits.length; i2++) {
            for (let i3 = 0; i3 < commits[i2].participants.length; i3++) {
                for (let i4 = 0; i4 < commits[i2].participants[i3].lessons.length; i4++) {
                    
                    if(test_obj[i1].a.lesson==commits[i2].participants[i3].lessons[i4].id){
                        find1 = {"i1": i1, "i2":i2, "i3":i3, "i4":i4}
                        // console.log("find1")
                    // }&&(commits[i2].participants[find1.i3])
                        if((test_obj[i1].b.lesson==commits[i2].participants[i3].lessons[i4].id)){
                            console.log(test_obj[i1].b.lesson,
                                commits[i2].participants[i3].lessons[i4].id,
                                test_obj[find1.i1].a.lesson,
                                commits[find1.i2].participants[find1.i3].lessons[find1.i4].id,
                                find1.i1, 
                                find1.i2, 
                                find1.i3, 
                                find1.i4, 
                                )
                                console.log("lessons",i1,i2,i3,i4)
                                
                            }
                    console.log("lessons")
                }


                
            }
        }
    }
    console.log("lessons",i1,i2,i3,i4)
}  



commits.forEach((e1,i1)=>{e1.participants.forEach((e2,i2)=>{
e2.lessons.forEach((e3,i3)=>{

for (let i1 = 0; i1 < test_obj.length; i1++) {

    if((e3.id==test_obj.a.g.id)||(e3.id==test_obj.b.g.id)){
if (e3.id==test_obj.a.g.id){not_finded_tesOBJ = test_obj.a.g.id }else{not_finded_tesOBJ = test_obj.b.g.id}
    console.log("+")
    }
}
})
})})





// function FINAL(){
// commits.forEach((e1,i1)=>{
//     e1.participants.forEach((e2,i2)=>{
//         e2.lessons.filter(Boolean).forEach((e3,i3)=>{
// if (e3.presenceMark == "PRESENCE"){
//                     let AB_e31
//             test_obj.forEach((e31, i31)=>{
//                 let true1 = 0
//                 if(e31.a.g.id == e3.id){true1 = 1 ;AB_e31 = e31.b.g.id}
//                 if(e31.b.g.id == e3.id){true1 = 1 ;AB_e31 = e31.a.g.id}
//                 if (true1>0){
//                      //нашли а или б? и присваемаем ей найденное
//                     // if(i31>0){AB_e31 = e31.a.g.id}else{AB_e31 = e31.b.g.id}

//                     console.log(i31,"нашли" ,e3.id, "НЕ НАШЛИ",AB_e31,  e31.a.g.id, e31.b.g.id)
// ///////////////////////////////////////////////////////
//                     commits.forEach((be1,bi1)=>{
//                         be1.participants.forEach((be2,bi2)=>{
//                             if(be2.id == e2.id){
//                             be2.lessons.filter(Boolean).forEach((be3,bi4)=>{
//                                 if (be3.presenceMark == "PRESENCE"){
//                     console.log("presence mark be3 ", be3,be1, e2)
                                            
//                             if ((AB_e31 == be3.id)){
//                                 console.log(AB_e31)
//                                 console.log(e2.fio,be2.fio," " ,e2.id,"  ",e31.a.g.id," G-",e31.a.g.idGroup,e31.a.g.lessonDate, ` 
//                                 ` ," ",e31.b.g.id," G-",e31.b.g.idGroup," ", e31.b.g.lessonDate)
                                
//                                 arrFINAL.push(["/",e2.fio,be2.fio,e2.id,e31.a.g.id,
//                                     " G-",e31.a.g.idGroup,e31.a.g.lessonDate,e31.b.g.id,e31.b.g.idGroup,e31.b.g.lessonDate])
                                
// //                                 commits.forEach((e9,i9)=>{
// //                                     e9.participants.forEach((e90,i90)=>{
// //                                           e90.lessons.filter(Boolean).forEach((e91,i91)=>{
// //                                             //   if (e91=e31.a.g.id){console.log(e91.idGroup, e91.lessonDate, e91.timeFrom, e91.timeTo)}
// //                                             //   if (e91=e31.b.g.id){console.log(e91.idGroup, e91.lessonDate, e91.timeFrom, e91.timeTo)}
// // })})})
                                
//                             }}})}})})}{console.log("yas0")}})}})})})


//                             saveData(arrFINAL, 
//                                 `${new Date().toLocaleString().slice(0,17) +document.title}.txt`)
//   console.log(arrFINAL)                          }

//                             FINAL()







                            }






























































/////..........................................................................
//  i = 0
// LESSONS.forEach((e1,i1)=>{
//     console.log('start', e1)
//     LESSONS.forEach((e2,i2)=>{
// //         if((e1!=e2)&&(e1.lessonDate==e2.lessonDate)){
// //             console.log("try", e2)
// //             let x11,x12,x21,x22 ="x"
// //     x11 = parseInt((e1.timeFrom.split(":").join("")))
// //     x12 = parseInt((e1.timeTo.split(":").join("")))
// //     x21 = parseInt((e2.timeFrom.split(":").join("")))
// //     x22 = parseInt((e2.timeTo.split(":").join("")))
// //     console.log(` ${x11}   ${x12} ${x21} ${x22}
// //    ${e1.timeFrom } \  ${e1.timeTo}  \ ${e2.timeFrom}  \ ${e2.timeTo}`)
// //             if(((x11<x21)&&(x21<x12))
// //             ||((x21<x12)&&(x12<x22))||(x11==x21)||(x12==x22)){
// //                 test_obj[i1] = {}
// // stringName = toString(e1.id)
// // // test_obj[stringName] = {
// // //                         a:{ lesson: LESSONS[i1].id,g: LESSONS[i1]},
// // //                         b:{ lesson: LESSONS[i2].id,g: LESSONS[i2]} 
// // //                     }
// //                 Object.defineProperty(test_obj[i1], i1, {
// //                     value: {
// //                         a:{ lesson: LESSONS[i1].id,g: LESSONS[i1]},
// //                         b:{ lesson: LESSONS[i2].id,g: LESSONS[i2]}
// //                     },
// //                     writable: true,
// //                     enumerable: true,    // логическое значение (по умолчанию false)
// //     configurable: true,   // логическое значение (по умолчанию false)

// //                   });
// //                 console.log("end", e2, "+++++++++++++++++++++++++")
// //                 i++
// //             }
            
// //         }
// //     })
// })
// //     emassive.forEach((e,i2)=>{
// //     if ((element.a.g.id==e.b.g.id)&(element.b.g.id==e.a.g.id)){
// // console.log("ALLWAYS",i,(element.a.g.id),(e.b.g.id),(element.b.g.id),(e.a.g.id) )
// // let bbb = test_obj[i2].a.g.id
// // if(test_obj2[i] !=0){
// // test_obj2[i][bbb] += "/"+e.b.g.id}
// // // test_obj2[i].
// //     }

// // })

// console.log(test_obj2)
// console.log(test_obj3)
// });

////////////////////////////////33333333333
//////////////////////////////////333333333333
/////////////////////////////////////33333333333




// commits
// test_obj


test_obj.forEach((e,i) => {//чистка дублей в пересекающихся ID уроков
    if(e==undefined){console.log("udefined start", i)}
    else{
    for(let i1 = 0; i1<test_obj.length; i1++){
        console.log(i1)
       if(test_obj[i1] == undefined){console.log('undefined')}
     else if ((e.a.lesson==test_obj[i1].b.lesson)&((e.b.lesson==test_obj[i1].a.lesson))){
        console.log(test_obj[i1],"/n",e)

        test_obj[i1]=undefined
        continue

    }    //console.log('no')
}
}
});



test_obj = test_obj.filter(Boolean) //убирает пустые



// выводит всего значения посещений и пропусков

// commits.forEach((e,i)=>{
//     e.participants.forEach((e,i)=>{
//         e.lessons.forEach((e,i)=>{

//             console.log("+")
//         })
//     })
// })




commits.forEach((e1,i1)=>{
    e1.participants.forEach((e2,i2)=>{
        e2.lessons.filter(Boolean).forEach((e3,i3)=>{

            test_obj.forEach((e31, i31)=>{
                if ((e31.a.g.id == e3.id)||(e31.b.g.id == e3.id)){
                    let AB_e31 //нашли а или б? и присваемаем ей найденное
                    if(i31=1){AB_e31 = e31.a.g.id}else{AB_e31 = e31.b.g.id}
                    console.log("нашли")




                    commits.forEach((e1,i1)=>{
                        e1.participants.forEach((be2,bi2)=>{
                            if(be2.id == e2.id){
                            be2.lessons.filter(Boolean).forEach((be3,bi4)=>{

                    
                                            
                            if (AB_e31 == be3.id){
                                console.log(e2.fio," " ,e2.id,"  ",e31.a.g.id," G-",e1.id," ",e31.b.g.id,`
                                `)
                                commits.forEach((e9,i9)=>{
                                    e9.participants.forEach((e90,i90)=>{
                                          e90.lessons.filter(Boolean).forEach((e91,i91)=>{
                                            //   if (e91=e31.a.g.id){console.log(e91.idGroup, e91.lessonDate, e91.timeFrom, e91.timeTo)}
                                            //   if (e91=e31.b.g.id){console.log(e91.idGroup, e91.lessonDate, e91.timeFrom, e91.timeTo)}
                                          })
                                })
                            })
                                breakk()
                            }

                        
                    

                    })}})})

                }


                {console.log("yas0")}
            }    )


        })
    })
})

//2944427

///////////////////////////////хз что

test_obj3.forEach((e,i)=>{
    test_obj3[i] = test_obj3[i].split('-')
    test_obj3[i].push('1')

    // for(let i3=0; i<test_obj3.length;i++){
    //     if split
    // }
})






















/////работает

test_obj3.forEach((e,i)=>{
    console.log(i,'iteration')
    try { 

        for(let i3=0; i<test_obj3.length;i++){
        if (e[0]=test_obj3[i3][1])
        {console.log(e)}
        }
    }
        
     catch (error) {
        
    }
   

/////работает    
    
})
test_obj3.forEach((e,i)=>{
    if (e>0){
        if e[0]





    }
})





arrx = {}
test_obj.forEach((e,i)=> {
    arrx.push(e.id)
    arrx[i].push(e.a.g.id)
    arrx[i].push(e.a.g.id)  
})

test_obj.length
for (let index = 0; index < test_obj.length; index++) {
    arrx.index. = test_obj[index].a.g.id
    arrx[index][2] = test_obj[index].b.g.id
}



//сравнение на пересечение
// нужен массив база пересеченных лесонов с
//  айдишниками групп на втором ряду [1][2]
commits.forEach(e=>{ 
    
    e.participants.forEach(e=>)
    console.log(e.id,e.participants)})

























































// test_obj.defineProperty(obj, 'key', descriptor);


///////ПРИВЕР РАБОТЫ Object.defineProperty
// Object.defineProperty(test_obj, 1, {
//     value: {
//         a: 42
//     },
//     writable: true
//   });
// ВЫВОДИТ
// //   {1: {…}, key: undefined, a: {…}}
// // 1: {a: 42}
// // a: {a: 42}
// // key: undefined






commits.forEach((e)=>{ for(let i =0; i<commits.length; i++){
    console.log(commits[i+1].lessons.length)
    for(let j = 0; j<total_length; j++)

    {console.log(i,j)}



}})    


Object.defineProperty(LESSONS[1], 3, { value:  44, writable: true })


G-02043524
G-00003101
G-02046663
G-02035347
G-02036637
G-00003101
G-02037888
G-02038427
G-02043343
G-02044109
G-02035458
G-02044066
G-00002734
G-02044111
G-02048329
G-02032419
G-00000546
G-02038438
G-02043345
G-02046663
G-02035446
G-02044108
G-02043348
G-02045066
G-02046127
G-02036744
G-02044232
G-02044093
G-02043524
G-02043346
G-02046130
G-02037480
G-02043735
G-02043351
G-02044105
G-02046639
G-02042968
G-02039270
G-02043764
G-02042552
G-02035022
G-02037238
G-02036975
G-02035471
G-00005657
G-00002737
G-02038429
G-02042549
G-02035247
G-02025943
G-02035749
G-02032416
G-02038437
G-02029292
G-02012658
G-02025948
G-02042554
G-02035548
G-02033716
G-02025947
G-02037180
G-02034255
G-02044091
G-02038433
G-02038430
G-02036980
G-02037118
G-02035453
G-02032417
G-02037156
G-02039274
G-02043344
G-02046672
G-02042934
G-02043491
G-02044090
G-02046586
G-02043338
G-02052498
G-02043350
G-02043339
G-02043347
G-02043340
G-02043349
G-02043353
G-02044107
G-02042966
G-02043737
G-02043736
G-02042964
G-02044086
G-02046129
G-02048275
G-02048423
G-02048424
G-02046654
G-02048331
G-02047374
G-02048379
G-02048420
G-02048426
G-02048428
G-02048706
G-02048710
G-02049039
G-02052092
G-02048418
G-02048419
G-02044238
G-02052500
G-02052764
G-02052732
