
let arrZapros, strZapros, arrZaprosFormated



//запрос ввода данных
arrZapros = prompt(`

------------------------------------------------------
КАКИЕ ГРУППЫ СВЕРЯТЬ НА ПЕРЕСЕЧЕНИЕ?
------------------------------------------------------
(не обязательно указывать те группы которые пересекаются
скрипт найдет эти группы сам)
------------------------------------------------------`,`G-00005657
G-02043344`)
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


function pereborMassiva(idLesson_arr){
    for(let i = 1; i!=idLesson_arr.length ;i++){
        func1(idLesson_arr[i], i)
        }}

async function func1(idLesson_arr, i){
    intId=parseInt(idLesson_arr,10)

    let url = `https://smd.mos.ru/api/v1/groups/${intId}/attendance?from=01.04.2022&to=31.04.2022`;
    let response = await fetch(url);

    commits[i] = await response.json()
    // commits[i] = await response.json() // читаем ответ в формате JSON
    }

pereborMassiva(idLesson_arr)




let timerId = setInterval(() =>{ 
    if (commits.length == arrZaprosFormated.length){
        console.log(commits)
        clearInterval(timerId)
    }
    }, 5000)



func3(){
 setTimeout(() => {
    if (commits.length == arrZaprosFormated.length){
        console.log(commits)
    } else {func3()}
    
}, 5000);
}

func3()

G-02035347
G-02036637
G-00003101
G-02037888
G-02038427
G-02043343
G-02044109
G-02035458
G-02044066
// G-00002734
// G-02044111
// G-02048329
// G-02032419
// G-00000546
// G-02038438
// G-02043345
// G-02046663
// G-02035446
// G-02044108
// G-02043348
// G-02045066
// G-02046127
// G-02036744
// G-02044232
// G-02044093
// G-02043524
// G-02043346
// G-02046130
// G-02037480
// G-02043735
// G-02043351
// G-02044105
// G-02046639
// G-02042968
// G-02039270
// G-02043764
// G-02042552
// G-02035022
// G-02037238
// G-02036975
// G-02035471
// G-00005657
// G-00002737
// G-02038429
// G-02042549
// G-02035247
// G-02025943
// G-02035749
// G-02032416
// G-02038437
// G-02029292
// G-02012658
// G-02025948
// G-02042554
// G-02035548
// G-02033716
// G-02025947
// G-02037180
// G-02034255
// G-02044091
// G-02038433
// G-02038430
// G-02036980
// G-02037118
// G-02035453
// G-02032417
// G-02037156
// G-02039274
// G-02043344
// G-02046672
// G-02042934
// G-02043491
// G-02044090
// G-02046586
// G-02043338
// G-02052498
// G-02043350
// G-02043339
// G-02043347
// G-02043340
// G-02043349
// G-02043353
// G-02044107
// G-02042966
// G-02043737
// G-02043736
// G-02042964
// G-02044086
// G-02046129
// G-02048275
// G-02048423
// G-02048424
// G-02046654
// G-02048331
// G-02047374
// G-02048379
// G-02048420
// G-02048426
// G-02048428
// G-02048706
// G-02048710
// G-02049039
// G-02052092
// G-02048418
// G-02048419
// G-02044238
// G-02052500
// G-02052764
// G-02052732