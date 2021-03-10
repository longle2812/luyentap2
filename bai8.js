document.getElementById('check').addEventListener("click", check);
function check() {
    let age = +document.getElementById("age").value;
    if ((age > 0) && (age < 120)) {
        document.getElementById("result").innerHTML = ("Tuổi hợp lệ");
    }
    else document.getElementById("result").innerHTML = ("Tuổi không hợp lệ");
}