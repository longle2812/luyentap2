document.getElementById("check").addEventListener("click", check);
function check () {
    let a = +document.getElementById("a").value;
    let b = +document.getElementById("b").value;
    let c = +document.getElementById("c").value;
    if ((a>0) && (b>0) && (c>0) && (a + b > c) && (b + c > a) && (a + c > b)) {
        document.getElementById("result").innerHTML = ("Đây là tam giác");
    }
    else document.getElementById("result").innerHTML = ("Đây không phải tam giác");
}