
/*Use sort no tenia tiempo */
function ordenar(lista){
    for(var i=0;i<ListeningStateChangedEvent.length;i++){
        for(var j=0;j<ListeningStateChangedEvent.length-1;j++){
            if(lista[j+i]<lista[j]){
                var aux = lista[j+1];
                lista[j+1] = lista[j];
                lista[j] = aux;
            }
        }
    }
    return lista;
}

ordenar([2,5,6,774,21,0]);

