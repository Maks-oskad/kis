// JavaScript source code
var k_line = document.querySelectorAll('tr.ant-table-row.ant-table-row-level-0')
k_line[0].childNodes[1].innerText



function similar_text(first, second, percent) { // eslint-disable-line camelcase


    if (first === null ||
        second === null ||
        typeof first === 'undefined' ||
        typeof second === 'undefined') {
        return 0
    }
    first = first.split(' ').join('').split('').sort().join('')
    second = second.split(' ').join('').split('').sort().join('')



    first += ''
    second += ''
    let pos1 = 0
    let pos2 = 0
    let max = 0
    const firstLength = first.length
    const secondLength = second.length
    let p
    let q
    let l
    let sum
    for (p = 0; p < firstLength; p++) {
        for (q = 0; q < secondLength; q++) {
            for (l = 0; (p + l < firstLength) && (q + l < secondLength) && (first.charAt(p + l) === second.charAt(q + l)); l++) { // eslint-disable-line max-len
                // @todo: ^-- break up this crazy for loop and put the logic in its body
            }
            if (l > max) {
                max = l
                pos1 = p
                pos2 = q
            }
        }
    }
    sum = max
    if (sum) {
        if (pos1 && pos2) {
            sum += similar_text(first.substr(0, pos1), second.substr(0, pos2))
        }
        if ((pos1 + max < firstLength) && (pos2 + max < secondLength)) {
            sum += similar_text(
                first.substr(pos1 + max, firstLength - pos1 - max),
                second.substr(pos2 + max,
                    secondLength - pos2 - max))
        }
    }
    if (!percent) {
        return sum
    }
    return (sum * 200) / (firstLength + secondLength)
}

//   var result = prompt(title, default);
var test_data = []
var result = prompt("dd")
//   result.replace(/[\n\r+�]+/g, '');
test_data = result.replace(/[\n+\d]+/g, '');
test_data = test_data.split(",")

var test_data2 = []

//���� ������� ��� ��
var kis = [];
k_line.forEach(
    function (x, i, listObj) {
        let k_now = k_line[i].childNodes[1].childNodes[1].innerHTML
        console.log(k_now + ', ' + i + ', ' + this);
        kis.push(k_now);
   },
   'myThisArg'
);

let di, ki = 0

for (di = 0; di < test_data.length; di++) { //k_line.length
    for (ki = 0; ki < k_line.length; ki++) {
        if (test_data[di])
        {

            console.log(kis[ki], "/n", test_data[di])
            var percent = similar_text(kis[ki].toLocaleLowerCase().replace(/[0-9]/g, ''), test_data[di].toLocaleLowerCase().replace(/[0-9]/g, ''), 1)
            console.log(ki, di, percent)
            if (percent > 95) {
                if (!document.querySelectorAll("[type='checkbox']")[ki + 1].checked) {
                    document.querySelectorAll("[type='checkbox']")[ki + 1].click()
                }

                k_line[ki].childNodes[1].childNodes[1].innerHTML =
                    k_line[ki].childNodes[1].innerHTML + '<br>�' + test_data[di]
                delete test_data[di];
               // test_data2.push(test_data[di]);
                //innerHTML <br> 
                //innerText /n
            }
        } continue
    }
}
alert(test_data)
test_data
document.querySelector("#container > div > main > aside > div > a:nth-child(1)").parentElement.remove()
document.querySelector("#container > div > main > aside > footer > span").textContent = "�� �������____ " + test_data