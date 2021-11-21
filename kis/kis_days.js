
var day_arr = [];
var noName = document.querySelector("#container > div > main > div > div > section > div > div > div.sections__ContentSection-rzp5px-0.sc-hgHYgh.jxVJaX > div.styled__StyledProfileInfo-sc-1pym2sp-0.ieNzNG > div > div > div > div:nth-child(1) > div").innerText.replace(/[аА-яЯ,]+/g, "")
var day = document.querySelectorAll("div.ant-fullcalendar-value")
var calendar = document.querySelectorAll("#container > div > main > div > div > section > div > div > div.styled__StyledCardContent-sc-1ydsk2u-4.kMuiUc > div > div > div > div.ant-tabs-content.ant-tabs-content-no-animated.ant-tabs-top-content > div.ant-tabs-tabpane.ant-tabs-tabpane-active > div.ant-tabs.ant-tabs-top.sc-keVrkP.kIHiEF.ant-tabs-line.ant-tabs-no-animation > div.ant-tabs-content.ant-tabs-content-no-animated.ant-tabs-top-content > div.ant-tabs-tabpane.ant-tabs-tabpane-active > div.styled__CalendarContainer-sc-1uw4147-0.fdHieV > div > div.styled__StyledCardContent-sc-123jlgd-3.eEOoJL > div.sc-cmjSyW.hhIxXN.ant-fullcalendar-fullscreen > div.ant-fullcalendar.sc-cmjSyW.hhIxXN.ant-fullcalendar-full.ant-fullcalendar-fullscreen > div > table > tbody > tr:nth-child(n) > td:nth-child(n)")

for (let i=0; i < calendar.length; i++) {

   
   
   
   
   
    try {
        if(parseInt(day[i].innerText)>i-1){ 
            console.log(i, (parseInt(day[i].innerText)))
        if (calendar[i].querySelector(" div > div.ant-fullcalendar-content > div > div > div.styled__CalendarCellContent-sc-1uw4147-4.kMYzRh").innerText)
        { 
            // console.log(day[i].innerText, " - ")
            // console.log(calendar[i].querySelector(" div > div.ant-fullcalendar-content > div > div > div.styled__CalendarCellContent-sc-1uw4147-4.kMYzRh").innerText) 
            
            day_arr.push(noName
                +"\t"
                +day[i].innerText
                +"\t"
                +calendar[i].querySelector(" div > div.ant-fullcalendar-content > div > div > div.styled__CalendarCellContent-sc-1uw4147-4.kMYzRh").innerText.replace(/[\n,]+/g,' ')+"\n")
        }
    }}
    catch (err) {
        {
            console.log("no")
        }

    }
}



const textarea = document.createElement('textarea');
document.body.append(textarea);
textarea.value = day_arr.toString().replace(/[,]+/g,"");
textarea.select();
document.execCommand('copy')





