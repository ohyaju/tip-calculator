const tipsRef = document.getElementsByClassName('tips'); 
const inputRef = document.getElementById('input');
const total = document.getElementById('total')

inputRef.addEventListener('input', function(){
    console.log(typeof inputRef.value,  tipsRef[0].textContent)
})



 
tipsRef[0].addEventListener('click', function(){
  
   total.innerHTML  = inputRef.value * tipsRef[0].textContent

})























//for (let i = 0; i < tipsRef.length; i++) {
//    tipsRef[i].addEventListener('click', (event) => {
//        console.log('hello') // 10%
//
//        tip = inputRef.value * event.target.textContent.slice(0, 2) / 100
//        const total = Number(tip) + Number(inputRef.value)
//        document.getElementById("total").innerHTML = total
//
//    });
//    // document.getElementById("reset").onclick = function () {
//    //     inputRef.value = ""};
//} // total
//
//document.getElementById("reset").onclick = function () {
//    inputRef.value = ""};
// // reset button 



