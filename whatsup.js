nam = document.querySelectorAll(".emoji-texttt")


nam.forEach(element => { if((element.title.substr(0,1)) == "3" ){element.closest("div").closest.style.backgroundColor = "red"} console.log(element.innerText.substr(0,2))})