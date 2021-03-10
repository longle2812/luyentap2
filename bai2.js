document.getElementById("check").addEventListener("click", check);
function check() {
    let number = +document.getElementById("number").value;
    let feet = number * 3.2808;
    document.getElementById("result").innerHTML = feet;
}