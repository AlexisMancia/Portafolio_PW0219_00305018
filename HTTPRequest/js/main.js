var app={
    
    init : function() {
        console.log("asd")
        this.searchForm = document.forms.searchPokemon;
        this.searchForm.addEventListener("submit",this.getPokemon);
    },
    getPokemon : function(evt){
        var idPokemon = this.idPokemon.value;
        evt.preventDefault();
        //validar id pokemon
        var base_url = `https://pokeapi.co/api/v2/pokemon/${idPokemon}`;
        console.log(base_url);
        fetch(base_url)
            .then(function(res)){
                return res.json();
            })        
    }
}
window.onload = () =>{
    app.init();
}