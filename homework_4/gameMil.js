// Доп задание.
// Проверки на условия делать не стал, так как хотел показать свою основную концепцию

var opinion;
var ok = true;
var i = 0;
var result = 0;

while(ok && i < quests.length){
    
    var msg = '';
    msg += quests[i].quest;
    for (item of quests[i].answers){
        msg += item.answer;
    }
    opinion =  +prompt(msg);
    ok = quests[i].answers[opinion - 1].res;
    if(ok){
        result += quests[i].count;
        alert('Правильный ответ! Вы заработали ' + result);
    }
    else{
        for (item of quests[i].answers){
            if (item.res){
                alert('К сожалению, Вы ошиблись!\n'
                + 'Правильный ответ ' + item.answer
                 + 'Вы заработали ' + result);
            }
        }
        
    }
    i++;
    
}
