//#1
// var a = 1, b = 1, c, d;
// c = ++a; alert(c);           // 2, Префиксная форма возвращает 1 + a, a = 2
// d = b++; alert(d);           // 1, Постфиксная форма возвращает b = d, b = b + 1 
// c = (2+ ++a); alert(c);      // 5, c = 2 + 1 + a (a = 2)
// d = (2+ b++); alert(d);      // 4, d = 2 + b (b = 2)
// alert(a);                    // 3, Результат после префиксной формы, 1 + a = 3
// alert(b);                    // 3, Результат после постфиксной формы,b + 1 = 3

//#2
// var a = 2;
// var x = 1 + (a *= 2); // x = 5 , x = 1 + 2 * 2 

//#3
var a = prompt('Ввод A');
var b = prompt('Ввод B');

if (!isNaN(a) || !isNaN(b)){
    if(a >= 0 && b >= 0){
        alert(a - b);
    }
    else if(a < 0 && b < 0){
        alert(a * b);
    }
    else{
        alert(a + b);
    }
}
else{
    alert('Введите цифры');
}

// #4
var numberCase = prompt('Вводите число от 0 до 15');
if(!isNaN(numberCase)){
    numberCase = Math.round(numberCase);
    if (numberCase >= 0 && numberCase < 16){
        switch(numberCase){
            case 0:
                alert(numberCase);
                numberCase += 1;
            case 1:
                alert(numberCase);
                numberCase += 1;
            case 2:
                alert(numberCase);
                numberCase += 1;      
            case 3:
                alert(numberCase);
                numberCase += 1;  
            case 4:
                alert(numberCase);
                numberCase += 1;   
            case 5:
                alert(numberCase);
                numberCase += 1;  
            case 6:
                alert(numberCase);
                numberCase += 1;  
            case 7:
                alert(numberCase);
                numberCase += 1;
            case 8:
                alert(numberCase);
                numberCase += 1;  
            case 9:
                alert(numberCase);
                numberCase += 1; 
            case 10:
                alert(numberCase);
                numberCase += 1; 
            case 11:
                alert(numberCase);
                numberCase += 1;   
            case 12:
                alert(numberCase);
                numberCase += 1;
            case 13:
                alert(numberCase);
                numberCase += 1; 
            case 14:
                alert(numberCase);
                numberCase += 1;   
            case 15:
                alert(numberCase);                 
        }
    }
    else{
        alert('Число не в диапозоне от 0 до 15')
    }
}
else{
    alert('Введите число!');
}


//#5
var number1 = 4;
var number2 = 8;

function mathAddition (a = 0, b = 0){
    return(a + b)
}
function mathSubtraction (a = 0, b = 0){
    return(a - b)
}
function mathMultiplication (a = 0, b = 1){
    return(a * b)
}
function mathDivision (a = 0, b = 1){
    return(a / b)
}

//#6
function mathOperation(arg1, arg2, operation){
    switch(operation){
        case '+':
            return(arg1 + arg2);
            break;
        case '-':
            return(arg1 - arg2);
            break;
        case '*':
            return(arg1 * arg2);
            break;
        case '/':
            return(arg1 / arg2);
            break; 
        default:
            return('Введите оператор: + , - , * , /.');                              
    }
}

//console.log(mathOperation(5,2, '-'));

//#7
//Различие между 0 и null!
// null является обозначение отсутствия объекта, но при этом в логических выражениях рассматривается как false
// 0 является числом и так же как null в логических выражениях является false
// При сравнении null == 0, null > 0 будет false. Но при сравнении null >= 0, будет true. Это обусловлено, 
// что при сравнении (>=, >) null рассматривается как 0, но при нестрогом равенстве (==) null рассматривается как undefined.
//Следовательно:
//console.log(null >= 0); true
//console.log(null == 0); false
//console.log(null > 0); false

//#8
function power(val, pow){
    if(pow == 1){
        return val * 1;
    }
    else if(pow == 2){
        return val * val;
    }
    else if(pow == 0){
        return 1;
    }
    else{
        return val * power(val, pow - 1);
    }
}

console.log(power(4,2))