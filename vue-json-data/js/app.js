(function(window){

    Vue.component('persona-card', {
        props: ['persona'],
        template: '#persona-card-template', // or we can just put the html here in a string, or even JSX (build step needed)
    });


    var app = new Vue({
        el: '#values',
        data: {
            title: 'Get data from an JSON file or TAG:',
            contador: '0',
            searchText: '',
            valores: [],
            personas: [],
            frutas: [],
            selectedPersonasFrutas: [],
        },
        computed: {
            filteredPersonas: function(){
                var that = this;
                let tempPersonas = this.personas
                                        /*
                                        .filter(function(persona) { // filter by persona name (searchBox)
                                            return persona.name.toLowerCase().includes(that.searchText.toLowerCase());
                                        })
                                        */
                                        .filter( function(persona) {
                                            if (that.selectedPersonasFrutas.length === 0) return true;
                                            console.log("type:", persona.favoriteFruit)
                                            return persona.favoriteFruit
                                                .find(function(favoriteFruit){
                                                    console.log("-->",fruta)                                                    
                                                    return that.selectedPersonasFrutas.includes(fruta);
                                                });
                                        });
                that.contador =  tempPersonas.length;
                return tempPersonas;
            }
        },        
        methods: {
            fetchValores: function () {
                this.$http.get('https://my-json-server.typicode.com/typicode/demo/posts')
                    .then(response => {                        
                        this.valores = response.data;
                    })
            },
            fetchDataPersonas: function(){
                var that = this;
                fetch('data/db1.json')
                    .then(function(response){
                        return response.json();
                    })
                    .then(function(personas){
                        that.contador = personas.length;                        
                        that.personas = personas;
                        for(i=0;i<personas.length;i++){
                            if( !that.frutas.includes( personas[i].favoriteFruit ) ){
                                that.frutas.push( personas[i].favoriteFruit )
                            }
                        }
                    });  
            }
        },
        created: function () {
            this.fetchValores();
            this.fetchDataPersonas();
        }        
    });
window.app = app; 
})(window);    