var images = ['dred',
    'robocop',
    'terminator'];
var divSmallImages = document.querySelector(".smallImages");
var commonDiv = document.querySelector('.commonDiv');



for (image of images) {
    var divImage = document.createElement('img');
    divImage.src = 'img/' + image + '.webp';
    divImage.setAttribute('myData', image);
    divImage.classList.add('smallImage');
    divImage.onclick = function (e) {
        divImage.onclick = function () {
            document.querySelector(".bigImage").remove()
        };
        var imageBig = document.createElement('img');
        imageBig.classList.add('bigImage');
        imageBig.src = 'img/' + e.target.attributes.myData.value + 'Big.webp';
        imageBig.onclick = function () {
            imageBig.remove();
        };
        imageBig.onerror = function () {
            alert('Данного изображения нет в каталоге');
            imageBig.remove();
        };
        commonDiv.append(imageBig);
    }
    divSmallImages.append(divImage);
}


var storeDiv = document.querySelector('.storeDiv');
var catalogDiv = document.querySelector('.catalogDiv');
var products = [['sell_1.jpg', 'Товар 1', '1500'],
['sell_2.jpg', 'Товар 2', '1500'],
['sell_3.jpg', 'Товар 3', '1500']];

for (product of products) {
    var card = document.createElement('div'),
        img = document.createElement('img'),
        h3 = document.createElement('h3'),
        span = document.createElement('span'),
        button = document.createElement('button');

    card.className = 'card';
    img.src = 'img/' + product[0];
    h3.innerHTML = product[1];
    span.innerHTML = product[2];
    button.innerHTML = 'В корзину';
    card.innerHTML = img.outerHTML + h3.outerHTML + span.outerHTML;

    button.onclick = function (e) {
        var price = e.target.parentNode.querySelector('span').cloneNode(true),
            img = e.target.parentNode.querySelector('img').cloneNode(true),
            title = e.target.parentNode.querySelector('h3').cloneNode(true),
            basketDiv = document.querySelector('.basketDiv'),
            div = document.createElement('div');
        img.className = 'sellImg';
        div.className = 'basketProduct';
        div.innerHTML += img.outerHTML + title.outerHTML + price.outerHTML;
        div.onclick = function () { div.remove(); total(); };
        basketDiv.prepend(div);
        total();
    }
    card.append(button);
    catalogDiv.append(card);
}
storeDiv.append(catalogDiv);

function total() {
    var el = document.querySelector('.basketDivSubtotal h2'),
        price = document.querySelectorAll('.basketDiv .basketProduct span'),
        total = 0;
    for (var i = 0; i <= price.length - 1; i++) {
        total += +price[i].innerHTML;
    }
    el.innerHTML = 'Стоимость корзины: ' + total.toFixed(2);
}
