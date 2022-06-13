


//берет списо уроков и находит пересечения
LESSONS.forEach((e1,i1)=>{
    console.log('start', e1)
    LESSONS.forEach((e2,i2)=>{
        if((e1!=e2)&&(e1.lessonDate==e2.lessonDate)){
            console.log("try", e2)
            let x11,x12,x21,x22 ="x"
    x11 = parseInt((e1.timeFrom.split(":").join("")))
    x12 = parseInt((e1.timeTo.split(":").join("")))
    x21 = parseInt((e2.timeFrom.split(":").join("")))
    x22 = parseInt((e2.timeTo.split(":").join("")))
    console.log(` ${x11}   ${x12} ${x21} ${x22}
   ${e1.timeFrom } \  ${e1.timeTo}  \ ${e2.timeFrom}  \ ${e2.timeTo}`)
            if(((x11<x21)&&(x21<x12))
            ||((x21<x12)&&(x12<x22))||(x11==x21)||(x12==x22)){

                console.log("end", e2, "+++++++++++++++++++++++++")
            }
            
        }
    })
})