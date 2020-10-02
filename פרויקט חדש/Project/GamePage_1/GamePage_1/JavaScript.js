
var mat = [4][4];
function createTable() {
    for (var i = 0; i < 4; i++) {
        document.createElement("tr");
        for (var j = 0; j < 4; j++)
            document.appendChild(td);
    }



    Random3Index();
}
function Random3Index() {//מגריל 3 מקומות ומכניס 2,2,4,8
    var index = 0;
    index = (Math.Round(Math.Random() * 100) % 16);
    mat[index] = 2;
    for (var i = 2; i <= 8; i *= 2) {
        do {
            index = (Math.Round(Math.Random() * 100) % 16);

        }    
        while (mat[index])
        mat[index] = i;  
    }

}
function RandomIndex() {//מגריל מקום פנוי ומוסיף את המספר 2
    do {
        var index = (Math.Round(Math.Random() * 100) % 16);
    }
    while (mat[index])

    mat[index] = 2;
}
function SumNums() {
    for (var i = 0; i < 4; i++)
        for (var j = 0; j < 4; j++)
            if()

}
