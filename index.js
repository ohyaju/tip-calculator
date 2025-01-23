const tipsRef = document.getElementsByClassName('tips');
const inputRef = document.getElementById('input');
const total = document.getElementById('total')

// inputRef.addEventListener('input', function(){
//     console.log(typeof inputRef.value,  tipsRef[0].textContent)
// })

// tipsRef[0].addEventListener('click', function(){

//    total.innerHTML  = inputRef.value * tipsRef[0].textContent

// })

for (let i = 0; i < tipsRef.length; i++) {
    tipsRef[i].addEventListener('click', (event) => {
        console.log('hello') // 10%

        tip = inputRef.value * event.target.textContent.replace('%', '') / 100
        console.log(tip, inputRef.value);

        total.innerHTML = Number(tip) + Number(inputRef.value)


    });
    // document.getElementById("reset").onclick = function () {
    //     inputRef.value = ""};
} // total

document.getElementById("reset").onclick = function () {
    inputRef.value = ""
    total.innerText = '0'
}; // reset button 





