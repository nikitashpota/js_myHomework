//#1
//
function checkNumber(number){
    if(number > 0 && number <= 999){
        var listNumber = number.toString().split('');
        return listNumber.reverse();
    }
    else{
        alert('Число не входит в диапазон от 0 до 999')
    }
}

function nameComposition(ind){
    switch(ind){
        case 0:
            return 'units';
            break;
        case 1:
            return 'dozens';
            break;
        case 2:
            return 'hundreds';
            break;
        default:
            break;                    
    }
}

function countComposition(number){
    var lst = checkNumber(number);
    var obj = {};
    for(var i = 0; i < lst.length; i++){
        var key = nameComposition(i);
        obj[key] = Number(lst[i]);
    }
    return obj;
}

console.log(countComposition(894));

//#2
