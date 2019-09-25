function fibonacci(numero){
    var a = 0;
    var b = 1;
    var c;

    for(let i=0; i<=numero;i++){
        c = a + b;
        a = b;
        b = c;
        console.log(c+","); 
    }
}

fibonacci(5);