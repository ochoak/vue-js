(function(window){
    var app = new Vue({
        el: '#values',
        data: {
            title: 'Get data from an JSON file or TAG:',
            contador: '0',
            searchText: '',
            valores: [],
            personas: [],
        },
        computed: {
            filteredPersonas: function(){
                console.log("filtrando personas...")
                var that = this;
                let tempPersonas = this.personas.filter(function(persona) { // filter by persona name (searchBox)
                                        return persona.name.toLowerCase().includes(that.searchText.toLowerCase());
                                    });
                that.contador =  tempPersonas.length;
                return tempPersonas;
            }
        },    
        created: function () {
            this.fetchValores();
            this.fetchDataPersonas();
        },        
        methods: {
            fetchValores: function () {
                this.$http.get('https://my-json-server.typicode.com/typicode/demo/posts')
                    .then(response => {                        
                        this.valores = response.data;
                    })
            },
            fetchDataPersonas: function(){
                console.log("Personas")
                var that = this;
                fetch('data/db1.json')
                    .then(function(response){
                        return response.json();
                    })
                    .then(function(personas){
                        that.contador = personas.length;
                        that.personas = personas;
                    });  
            }
        } 
    });
window.app = app; 
})(window);    