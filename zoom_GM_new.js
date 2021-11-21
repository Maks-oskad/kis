
  var list = document.querySelector("ul#participants-ul.participants-ul")


  var itemsArr = [...list.children]
    .sort((a,b)=>a.innerText>b.innerText?1:-1)
    .forEach(node=>list.appendChild(node));

// var list = document.getElementById('mylist');

// var items = list.childNodes;
// var itemsArr = [];
// for (var i in items) {
//     if (items[i].nodeType == 1) { // get rid of the whitespace text nodes
//         itemsArr.push(items[i]);
//     }
// }

// itemsArr.sort(function(a, b) {
//   return a.innerHTML == b.innerHTML
//           ? 0
//           : (a.innerHTML > b.innerHTML ? 1 : -1);
// });

// for (i = 0; i < itemsArr.length; ++i) {
//   list.appendChild(itemsArr[i]);
// }

// //ES6 syntax
// var parentAll = document.querySelector("ul#participants-ul.participants-ul")

// var list = parentAll

// var itemsArr = [...list.children]
//   .sort()
//   .sort((a,b)=>a.innerText>b.innerText?1:-1)
//   .forEach(node=>list.appendChild(node));
