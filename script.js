const clock = document.querySelector('#clock')

setInterval(function (){
    let date = new Date()
// console.log(date.toLocalString());
clock.innerHTML = date.toLocaleTimeString();
}, 1000)