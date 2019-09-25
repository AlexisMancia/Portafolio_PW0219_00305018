function recurrencias(numero,array){
    var veces = 0;
    for(let i=0;i<array.length;i++){
        if(array[i]==numero){
            veces ++;
        }
    }
    console.log(veces);
}

recurrencias(3,[3,3,3,3,3,123,13,5,56,3]);