function sumaArray(array){
    var total= 0;
   
    for(let i=0;i<array.length;i++){
        total += array[i];
    }
    console.log(total);
    console.log(total/array.length);
}

sumaArray([1,2,3,4,5,6,7,8]);