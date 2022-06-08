

var foodsArray = Array.prototype.slice.call(guests, 0);

foodsArray.sort(function (a, b) {
    var aCat = a.querySelectorAll(".participants-item__left-section").textContent;
    var bCat = b.querySelectorAll(".participants-item__left-section").textContent;;
    if (aCat > bCat) return 1;
    if (aCat < bCat) return -1;
    return 0;
});




<div class="participants-item__left-section"><img class="participants-item__avatar" src="https://us05st1.zoom.us/web_client/5g6glw/image/default-avatar.png" alt="" aria-hidden="true"><span class="participants-item__name-section"><span class="participants-item__display-name" style="max-width: 219.109px;">Максим Константинович Гусаренко ОСКАД Сокольники</span><span class="participants-item__name-label"> (Организатор, Я)</span></span></div>