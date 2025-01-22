const tipsRef = document.getElementsByClassName('tips'); // []
const inputRef = document.getElementById('input');
let tip = ''
for (let i = 0; i < tipsRef.length; i++) {
    tipsRef[i].addEventListener('click', (event) => {
        console.log() // 10%

        tip = inputRef.value * event.target.textContent.slice(0, 2) / 100
        const total = Number(tip) + Number(inputRef.value)
        document.getElementById("total").innerHTML = total

    });
    // document.getElementById("reset").onclick = function () {
    //     inputRef.value = ""};
} // total

document.getElementById("reset").onclick = function () {
    inputRef.value = ""};
 // reset button 



