(function(d,s){s=d.createElement('script');s.src='https://html2canvas.hertzen.com/dist/html2canvas.js';(d.head||d.documentElement).appendChild(s)})(document);

html2canvas(document.querySelector("html")).then(canvas => {
    document.body.appendChild(canvas)
});

// html2canvas(document.querySelector("#content")).then(canvas => {
//     document.body.appendChild(canvas)
// });

