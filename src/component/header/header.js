let a = 0;
let header = document.getElementById('header');
setInterval(function(){
    a++;
    header.innerHTML = a;
},1000)