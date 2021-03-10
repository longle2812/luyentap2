document.getElementById("check").addEventListener("click", check);
function check () {
    let a = +document.getElementById("number").value;
    let S = a * a * 3.14;
    document.getElementById("result").innerHTML = ("Diện tích hình vuông là " +S);
}