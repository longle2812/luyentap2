document.getElementById('check').addEventListener("click", check);
function check() {
    let C = +document.getElementById("temper").value;
    let F = C * 9 / 5 + 32;
    document.getElementById("result").innerHTML = (+ F +" độ F");
}