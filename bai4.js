document.getElementById("check").addEventListener("click", check);
function check () {
    let a = +document.getElementById("a").value;
    let b = +document.getElementById("b").value;
    let S = a * b;
    document.getElementById("result").innerHTML = ("Diện tích là " +S);
}