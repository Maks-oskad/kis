


test_obj = {}
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
                Object.defineProperty(test_obj, `${e1.id}`, {
                    value: {
                        a:{ lesson: e1.id,g: e1},
                        b:{ lesson: e2.id,g: e2} 
                    },
                    writable: true,
                    enumerable: true,    // логическое значение (по умолчанию false)
    configurable: true,   // логическое значение (по умолчанию false)

                  });
                console.log("end", e2, "+++++++++++++++++++++++++")
            }
            
        }
    })
})