let rating = 0;
let first = true;
let num;
function rate(ele) {
    switch (ele.id) {
        case "one":
            rating = 1;
            break;
        case "two":
            rating = 2;
            break;
        case "three":
            rating = 3;
            break;
        case "four":
            rating = 4;
            break;
        case "five":
            rating = 5;
            break;
    }
    if (!first) {
        num.style.color = "hsl(217, 12%, 63%)";
        num.style.backgroundColor = "hsl(213, 19%, 21%)";
    }
    num = document.getElementById(ele.id);
    num.style.color = "hsl(0, 0%, 100%)";
    num.style.backgroundColor = "hsl(217, 12%, 63%)";
    first = false;
}

function sub() {
    document.getElementById("rating").innerHTML = rating;
    document.getElementById("end").style.display = "grid";
    document.getElementById("start").style.display = "none";

}

