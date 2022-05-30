let BD

function getF(getSting) {

    xhr = new XMLHttpRequest();
    xhr.open('GET',
       getSting);
 
    var el = window.location.href
    var numEl = parseInt(el.match(/\d+/))
 
    xhr.onload = function () {
        BD = JSON.parse(xhr.responseText);
        console.log(BD, 'это из запроса гет не функции')
        // BD.participants.forEach((e) => {

         try {
            
            if(BD.data.status.key !== "CLOSED")
            {console.log("закрыта", i)}
            else
            {console.log(BD.data.status.key)}
             } catch (err) {
        console.log('error')
            // обработка ошибки
          
          }
     };
                
               xhr.send();
          
             



        


    }






function statusRegistry(){
for(let i =2034250; i < 2034255; i++){

   getF(`https://smd.mos.ru/api/v1/groups/${""+i}/status_registry`)

}

}



xhr.onload = function () {
    BD = JSON.parse(xhr.responseText);
    BD.participants.forEach((e) => {
       i = 0
       j = 0
       if (e.id == numEl) {
          i = 0
          e.lessons.forEach((e) => {
             console.log(e)
          
          })

          if ((i > 0) || (j > 0)) { console.log("+" + i + " -" + j) }
          else { console.log("0 0") }

       }
    });
 };