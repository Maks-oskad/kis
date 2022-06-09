commits
test_obj


test_obj.forEach((e,i) => {
    
    for(let i_f = 0; i_f<test_obj.length; i_f++){
    if ((e.a.lesson==test_obj[i_f].b.lesson)||((e.b.lesson==test_obj[i_f].a.lesson))){
        console.log(e)
    }    console.log('no')
    }
});