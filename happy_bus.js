

var  b;
var grouppa,grouppa3
var i,j;h = 0


function ddd (grouppa){
    
    xhr = new XMLHttpRequest();
xhr.open('GET', 
`https://smd.mos.ru/api/v1/groups/${grouppa}/attendance?from=01.03.2022&to=31.05.2022`);

var el = window.location.href
var numEl = parseInt(el.match(/\d+/))

xhr.onload = function() {
    b = JSON.parse(xhr.responseText);
    b.participants.forEach((e)=>{
        i= 0
        j = 0
    if(e.id == numEl){ i= 0
        e.lessons.forEach((e)=>{
            //console.log(e)
            if(e.presenceMark == "PRESENCE"){i++}
            if(e.presenceMark =="DISMISSED"){j++}
            if(e.presenceMark=="PRESENCE_EXCEEDS"){j++}
            if(e.presenceMark=="ABSENT"){j++}
            
    })

    if((i>0)||(j>0)){console.log("+"+i+" -"+j)}
    else{console.log("0 0")}

    }    
    });
};
xhr.send();

console.log("Ни ху я")


}
// if(grouppa.charAt(0)==0){grouppa=parseInt.grouppa.slice(1)}
// parseInt
// charAt(0)
// .slice(1)


grouppa2 = document.querySelectorAll('#container > div > main > div > div > section > div > div > div > div > div > div.ant-tabs-content.ant-tabs-content-no-animated.ant-tabs-top-content > div.ant-tabs-tabpane.ant-tabs-tabpane-active > div.styled__StyledGroup-sc-1d3dg7v-0.fLCGLL > div > div.ant-table-wrapper.sc-hEsumM.main-participants-list.sc-hmXxxW.bMcqhk > div > div > div > div > div > table > tbody > tr:nth-child(n) > td.code-col > a > span')



document.querySelectorAll('.code-col').forEach((e)=>{
    grouppa = (e.innerText.replace("G-0000").replace("G-000").replace("G-00").replace("G-0").replace("G-").match(/\d+/))
    // if(grouppa.substr(1,1)==0){grouppa=parseInt.grouppa.slice(1)}
   var cc = `"<button onclick="ddd(${grouppa})">Go to ${grouppa}</button>"` 
e.innerHTML =  e.innerHTML+cc
h++

 }
)