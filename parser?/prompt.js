
//запрос ввода данных
strZapros = prompt(`

------------------------------------------------------
КАКИЕ ГРУППЫ СВЕРЯТЬ НА ПЕРЕСЕЧЕНИЕ?
------------------------------------------------------
(не обязательно указывать те группы которые пересекаются
скрипт найдет эти группы сам)
------------------------------------------------------`,`G-00005657
G-02043344`)
//форматирование
arrZapros = arrZapros.replace("G-","")
arrZaprosFormated = arrZapros.split("\n")
arrZaprosFormated.map((e)=>{parseInt(e,10)})
//отчистка
//arrZapros.replace(/[+\n+\r+\,]+/g, '')
//




arrZapros.replace("G-00000","").replace("G-0000","")
.replace("G-000","").replace("G-00","")
.replace("G-0","").replace("G-","")