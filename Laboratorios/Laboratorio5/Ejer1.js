function tipoDatos(array){
    var tN = 0;
    var tS = 0;
    var tB = 0;
    var tO = 0;
    var tNull=0;
    for(let i=0;i<array.length;i++){
        
        if(typeof(array[i])=="number"){
            tN++;
        }
        else if(typeof(array[i])=="string"){
            tS++;
        }
        else if(typeof(array[i])=="boolean"){
            tB++;
        }
        else if(typeof(array[i])=="object"){
            tO++;
        }
        else if(typeof(array[i])=="null"){
            tNull++;
        }
    }
    console.log("Number:"+tN);
    console.log("Strings:"+tS);
    console.log("Booleans:"+tB);
    console.log("Objects:"+tO);
    console.log("Nulls:"+tNull);

}

tipoDatos([1,"dasd",true,10.2,[2,3]]);