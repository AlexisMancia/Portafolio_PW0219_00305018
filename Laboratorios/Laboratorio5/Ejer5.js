function palindroma(palabra){
    var isPalindroma = true;
    var original = palabra.split("");
    //console.log(original);
    var invertido = palabra.split("").reverse();
    //console.log(invertido);
    for(let i=0;i<original.length;i++){
        if(invertido[1] != original[i]){
            console.log("No es palindrome");
            isPalindroma=false;
            break;
        }
    }
    if(isPalindroma){
        console.log("Es palindroma");
        
    }
}

palindroma("annita");

