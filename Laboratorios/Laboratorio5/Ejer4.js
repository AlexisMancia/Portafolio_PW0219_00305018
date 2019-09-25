function adivinarNum(numero){
    var adivino=false;
    var array=[0];
    for(let i=0;i<20;i++){
        var aleatorio = parseInt((Math.random()*10),10);
        array.push(aleatorio);
        console.log(array[i]);
    }
    for(let i=0;i<array.length;i++){
        if(array[i]==numero){
            adivino=true;
            break;
        }
    }
    if(adivino==true){
        console.log("Gano");
    }else{
        console.log("Perdio");
    }
}

adivinarNum(2);