document.getElementById("check").addEventListener("click", check);
function check () {
    let a = +document.getElementById("a").value;
    let b = +document.getElementById("b").value;
    if (a == 0) {
        if (b == 0) {
            document.getElementById("result").innerHTML = ("Phương trình vô số nghiệm");
        }
        else {
            document.getElementById("result").innerHTML = ("Phương trình vô nghiệm");
        }
    }
    else {
        let x = b * -1 / a;
        document.getElementById("result").innerHTML = ("Phương trình có nghiệm là "+ x);
    }
}