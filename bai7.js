document.getElementById("check").addEventListener("click", check);
function check () {
    let a = +document.getElementById("a").value;
    let b = +document.getElementById("b").value;
    let c = +document.getElementById("c").value;
    let delta = b*b - (4 * a * c);
    let x1 = -1;
    let x2 = c * -1 / a;
    if (delta < 0) {
        document.getElementById("result").innerHTML = ("Phương trình vô nghiệm");
    }
    else if (delta == 0) {
        let x = b*-1 / 2 / a;
        document.getElementById("result").innerHTML = ("Phương trình có nghiệm kép " +x);
    }
    else {
        document.getElementById("result").innerHTML = ("Phương trình có 2 nghiệm " +x1 " và " +x2);
    }
}