(function(window){    
    var app = new Vue({
        el: '#calculator',
        data: {
            results: '0',
        },
        computed: {            
        },        
        methods: {
            add : function(num){
                if(this.results === '0')
                    this.results = num;
                else    
                    this.results += num;              
            },
            clear : function(){
                this.results = '0';
            }
        },
        created: function () {
        }        
    });
window.app = app; 
})(window);    