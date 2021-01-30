//#1
//Не разобрался , как c while сделать первый цикл с учетом первого числа из промежутка
var d = 100;
var i = 0;

outer: for (i; i < d; i++) {
    if (i >= 2) {
        var j = 2;
        while (j < i) {
            if (i % j == 0) continue outer;
            j++
        }
        document.write('<p>' + i + '</p>')
    }
}

//#2

var goods = [
    {
        title: "Товар 1",
        price: 100,
        quantity: 10,

    },
    {
        title: "Товар 2",
        price: 200,
        quantity: 20,
    },
    {
        title: "Товар 3",
        price: 300,
        quantity: 5,
    },
]

function sum(mas) {
    for (var item of mas) {
        alert('Общая стоимость ' + item.title + ' - ' + item.price * item.quantity);
    }
}

function countBasketPrice(mas) {
    var result = 0;
    for (var item of mas) {
        result += (item.price * item.quantity);
    }
    return (result)
}

alert(countBasketPrice(goods));

//#4

for (var n = 0; n < 10; console.log(n++));

//#5
str = '';
for (var n = 0; n <= 5; n++) {
    str += '*';
    console.log(str);
}