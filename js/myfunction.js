let colorInput = document.querySelector('#color');


colorInput.addEventListener('input', () =>{
    let color = colorInput.value;
    document.body.style.backgroundColor = color;



})


function newColor(){
    var symbols,color;
    symbols = "0123456789ABCDEFGEF";
    color ="#";
    for(var i=0;i<6;i++){
        color = color + symbols[Math.floor(Math.random() * 16)];


    }

    document.body.style.background = color;

    }