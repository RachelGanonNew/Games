var happend = false;
var table = document.createElement("table");
function CreateTable() {//פונקציה היוצרת את הטבלה באופן דינאמי
    for (var i = 0; i < 4; i++) {
        var tr = document.createElement("tr");
        for (var j = 0; j < 4; j++) {
            var td = document.createElement("td");
            td.id = "td" + i + j;
            td.style.width = "140px";
            td.style.height = "141px";
            td.style.borderRadius = "15px";
            tr.appendChild(td);//מןסיף לכל שורה עמודה
        }
        table.appendChild(tr);
    }
    document.querySelector("body").appendChild(table);//מןסיף את הטבלה לעמוד
    var index = RandomAndInsert();//קריאה ראשונה לפונקציה
    while (RandomAndInsert() == index);//קריאה שניה לפונקציה
}
function RandomAndInsert() {// פונקציה שמגרילה את 2 4 ומגרילה מקום פנוי להכניס אותם
    var index = 0, idRow = 0, idCol = 0;
    //הגרלת מיקום בטבלה
    do {
        index = (Math.floor(Math.random() * 100) % 16);
        idRow = Math.floor(index / 4);
        idCol = Math.floor(index % 4);
    }
    while (document.getElementById("td" + idRow + idCol).innerHTML != "");
    //הגרלת מספר
    var num = (Math.floor(Math.random() * 100 % 4));
    while (num != 2 && num != 4) {
        var num = (Math.floor(Math.random() * 100 % 4));
    }
    //הצבת המספר המוגרל במקום המוגרל
    document.getElementById("td" + idRow + idCol).innerHTML = num;
    ChangeColor(idRow, idCol);
    return index;
}
function Switch(event) {
    happend = false

    switch (event.keyCode) {
        case 39:
            MoveRight();
            break;
        case 37:
            MoveLeft();
            break;
        case 38:
            MoveUp();
            break;
        case 40:
            MoveDown();
            break;

    }
    var fix = true;
    for (var i = 0; i < 4; i++)
        for (var j = 0; j < 4; j++) {
            if (document.getElementById("td" + i + j).innerHTML == "") {
                fix = false
                break;
            }
        }
    if (fix) {

        if (!CheckPossibleToSum())
        {
            Over();
        }
    }

    else {
        RandomAndInsert();
    }
}
function ChangeColor(i, j) {
    var curtTd = document.getElementById("td" + i + j).innerText;
    switch (curtTd) {
        case "":
            document.getElementById("td" + i + j).style.backgroundColor = "#d1cccc";
            break;
        case "2":
            document.getElementById("td" + i + j).style.color = "gray";
            document.getElementById("td" + i + j).style.backgroundColor = "white";
            break;
        case "4":
            document.getElementById("td" + i + j).style.color = "gray";
            document.getElementById("td" + i + j).style.backgroundColor = "antiquewhite";
            break;
        case "8":
            document.getElementById("td" + i + j).style.color = "white";
            document.getElementById("td" + i + j).style.backgroundColor = "#f7ab78";
            break;
        case "16":
            document.getElementById("td" + i + j).style.color = "white";
            document.getElementById("td" + i + j).style.backgroundColor = "#f5853b";
            break;
        case "32":
            document.getElementById("td" + i + j).style.color = "white";
            document.getElementById("td" + i + j).style.backgroundColor = "#ef7640";
            break;
        case "64":
            document.getElementById("td" + i + j).style.color = "white";
            document.getElementById("td" + i + j).style.backgroundColor = "#fc5029";
            break;
        case "128":
            document.getElementById("td" + i + j).style.color = "white";
            document.getElementById("td" + i + j).style.backgroundColor = "#f8d05e";
            break;
        case "256":
            document.getElementById("td" + i + j).style.color = "white";
            document.getElementById("td" + i + j).style.backgroundColor = "#f8e938";
            break;
        case "512":
            document.getElementById("td" + i + j).style.color = "gray";
            document.getElementById("td" + i + j).style.backgroundColor = "#ffd800";
            break;
        case "1024":
            document.getElementById("td" + i + j).style.color = "gray";
            document.getElementById("td" + i + j).style.backgroundColor = "#fcc40d";
            break;
        case "2048":
            document.getElementById("td" + i + j).style.color = "gray";
            document.getElementById("td" + i + j).style.backgroundColor = "#ffeb75";
            document.getElementById("td" + i + j).style.boxShadow="#f3f2ee 3px 5px ";
            Win();
            break;
    }
}
function clearBackground() {
    for (var i = 0; i < 4; i++)
        for (var j = 0; j < 4; j++)
            ChangeColor(i, j);
}
function Over() {
    document.getElementById("over").style.display = "block";
    document.querySelector("body").style.opacity = "0.4";
    document.getElementById("over").style.opacity = "0.8";
    document.getElementById("over").style.position = "absolute";
    document.getElementById("over").style.top = "450px";
    document.getElementById("header").style.animation = "unset";

}
function Win() {
    document.getElementById("win").style.display = "block";
    document.querySelector("body").style.opacity = "0.4";
    document.getElementById("win").style.opacity = "0.8";
    document.getElementById("win").style.position = "absolute";
}
function MoveLeft() {

    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++)
            if (document.getElementById("td" + i + j).innerHTML == "") {
                var col = j + 1;
                while (col < 4 && document.getElementById("td" + i + col).innerHTML == "") {
                    col++;
                }
                if (col < 4) {
                    document.getElementById("td" + i + j).innerHTML = document.getElementById("td" + i + col).innerHTML;
                    document.getElementById("td" + i + col).innerHTML = "";
                }
            }
        clearBackground();
    }
    if (happend == false) {
        SumLeft();
    }
}
function SumLeft() {

    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 3; j++)
            if (document.getElementById("td" + i + j).innerHTML != "") {
                if (document.getElementById("td" + i + j).innerHTML == document.getElementById("td" + i + (j + 1)).innerHTML) {
                    document.getElementById("td" + i + j).innerHTML = parseInt(document.getElementById("td" + i + (j + 1)).innerHTML) + parseInt(document.getElementById("td" + i + (j + 1)).innerHTML);
                    document.getElementById("td" + i + (j + 1)).innerHTML = "";
                    score.innerHTML = parseInt(score.innerHTML) + parseInt(document.getElementById("td" + i + j).innerHTML);

                }
            }
    }
    happend = true;
    MoveLeft();

}
function MoveRight() {
    for (var i = 0; i < 4; i++)
        for (j = 3; j >= 0; j--) {
            if (document.getElementById("td" + i + j).innerHTML == "") {
                var col = j - 1;
                while (col > -1 && document.getElementById("td" + i + col).innerHTML == "") {
                    col--;
                };
                if (col > -1) {
                    document.getElementById("td" + i + j).innerHTML = document.getElementById("td" + i + col).innerHTML;
                    document.getElementById("td" + i + col).innerHTML = "";
                }
            }
            clearBackground(i, j);
        }
    if (!happend) {
        SumRight();
    }
}
function SumRight() {
    for (var i = 0; i < 4; i++) {
        for (var j = 3; j > 0; j--)
            if (document.getElementById("td" + i + j).innerHTML != "") {
                if (document.getElementById("td" + i + j).innerHTML == document.getElementById("td" + i + (j - 1)).innerHTML) {
                    document.getElementById("td" + i + j).innerHTML = parseInt(document.getElementById("td" + i + (j - 1)).innerHTML) * 2;
                    document.getElementById("td" + i + (j - 1)).innerHTML = "";
                    score.innerHTML = parseInt(score.innerHTML) + parseInt(document.getElementById("td" + i + j).innerHTML);

                }
            }
    }
    happend = true;
    MoveRight();
}
function MoveUp() {
    for (var i = 0; i < 4; i++)
        for (var j = 0; j < 4; j++) {
            if (document.getElementById("td" + i + j).innerHTML == "") {
                var row = i + 1;
                while (row < 4 && document.getElementById("td" + row + j).innerHTML == "") {
                    row++;
                }
                if (row < 4) {
                    document.getElementById("td" + i + j).innerHTML = document.getElementById("td" + row + j).innerHTML;
                    document.getElementById("td" + row + j).innerHTML = "";
                }
            }
            clearBackground(i, j);
        }
    if (!happend) {
        SumUp();
    }
}
function SumUp() {
    for (var i = 0; i < 3; i++)
        for (var j = 0; j < 4; j++) {
            if (document.getElementById("td" + i + j).innerHTML != "") {
                if (document.getElementById("td" + i + j).innerHTML == document.getElementById("td" + (i + 1) + j).innerHTML) {
                    document.getElementById("td" + i + j).innerHTML = parseInt(document.getElementById("td" + (i + 1) + j).innerHTML) * 2;
                    document.getElementById("td" + (i + 1) + j).innerHTML = ""; score.innerHTML = parseInt(score.innerHTML) + parseInt(document.getElementById("td" + i + j).innerHTML);
                    score.innerHTML = parseInt(score.innerHTML) + parseInt(document.getElementById("td" + i + j).innerHTML);

                }
            }
        }
    happend = true;
    MoveUp();
}
function MoveDown() {
    for (var i = 3; i >= 0; i--)
        for (var j = 0; j < 4; j++) {
            if (document.getElementById("td" + i + j).innerHTML == "") {
                var row = i - 1;
                while (row >= 0 && document.getElementById("td" + row + j).innerHTML == "") {
                    row--;
                }

                if (row >= 0) {
                    document.getElementById("td" + i + j).innerHTML = document.getElementById("td" + row + j).innerHTML;
                    document.getElementById("td" + row + j).innerHTML = "";
                }
            }
            clearBackground(i, j);
        }
    if (!happend) {
        SumDown();
    }
}
function SumDown() {
    for (var i = 3; i > 0; i--)
        for (var j = 0; j < 4; j++) {
            if (document.getElementById("td" + i + j).innerHTML != "") {
                if (document.getElementById("td" + i + j).innerHTML == document.getElementById("td" + (i - 1) + j).innerHTML) {
                    document.getElementById("td" + i + j).innerHTML = parseInt(document.getElementById("td" + (i - 1) + j).innerHTML) * 2;
                    document.getElementById("td" + (i - 1) + j).innerHTML = "";
                    score.innerHTML = parseInt(score.innerHTML) + parseInt(document.getElementById("td" + i + j).innerHTML);

                }
            }
        }
    happend = true;
    MoveDown();
}
function CheckPossibleToSum() {
    var f = false;
    for (var i = 0; i < 4; i++)
        for (var j = 0; j < 4; j++) {
            if (i > 0 && i < 4) {
                if (document.getElementById("td" + i + j).innerHTML == document.getElementById("td" + (i - 1) + j).innerHTML)
                {
                    f = true;
                    break;
                }
            }
            if (i < 3)
            {
                if (document.getElementById("td" + i + j).innerHTML == document.getElementById("td" +(i+1) + j).innerHTML)
                {
                    f = true;
                    break;
                }
            }
            if (j > 0 && j < 4)
            {
                if (document.getElementById("td" + i + j).innerHTML == document.getElementById("td" + i + (j - 1)).innerHTML)
                {
                    f = true;
                    break;
                }
            }
            if (j<3)
            {
                if (document.getElementById("td" + i + j).innerHTML == document.getElementById("td" + i + (j + 1)).innerHTML)
                {
                    f = true;
                    break;
                }
            }   
            //if (document.getElementById("td" + i + j).innerHTML == document.getElementById("td" + i + (j + 1)).innerHTML ||
            //    document.getElementById("td" + i + j).innerHTML == document.getElementById("td" + i + (j - 1)).innerHTML ||
            //    document.getElementById("td" + i + j).innerHTML == document.getElementById("td" + (i + 1) + j).innerHTML ||
            //    document.getElementById("td" + i + j).innerHTML == document.getElementById("td" + (i - 1) + j).innerHTML) {
            //    f = true;
            //    break;
            //}
        }
 return f;
}