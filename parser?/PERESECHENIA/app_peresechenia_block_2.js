// commits
// test_obj


test_obj.forEach((e,i) => {
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