function creatChessboard() {
    var newTable = document.createElement('table'),
        letters = ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', ''],
        whiteRow1 = ['1', '&#9814;', '&#9816;', '&#9815;', '&#9813;', '&#9812;', '&#9815;', '&#9816;', '&#9814;', '1'],
        whiteRow2 = ['2', '&#9817;', '&#9817;', '&#9817;', '&#9817;', '&#9817;', '&#9817;', '&#9817;', '&#9817;', '2'],
        blackRow1 = ['8', '&#9820;', '&#9822;', '&#9821;', '&#9819;', '&#9818;', '&#9821;', '&#9822;', '&#9820;', '8'],
        blackRow2 = ['7', '&#9823;', '&#9823;', '&#9823;', '&#9823;', '&#9823;', '&#9823;', '&#9823;', '&#9823;', '7'];
    for (var i = 0; i < 10; i++) {
        var newRow = newTable.insertRow(i);
        for (var j = 0; j < 10; j++) {
            var newCell = newRow.insertCell(j);
            //newCell.innerText = j * i;
            switch (i) {
                case 0:
                    newCell.innerText = letters[j];
                    break;
                case 1:
                    newCell.innerHTML = blackRow1[j];
                    break;
                case 2:
                    newCell.innerHTML = blackRow2[j];
                    break;
                case 7:
                    newCell.innerHTML = whiteRow2[j];
                    break;
                case 8:
                    newCell.innerHTML = whiteRow1[j];
                    break;
                case 9:
                    newCell.innerText = letters[j];
                    break;
                default:
                    if (j == 0 || j == 9) {
                        newCell.innerText = String(9 - i);
                    }
                    break;
            }
        }
    }

    document.body.append(newTable);
}

creatChessboard();