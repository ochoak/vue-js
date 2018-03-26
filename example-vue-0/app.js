(function(window) {

    var app = new Vue({
        el: '#app',
        data: {
            subtitulo: 'pepino'
        }
    });

    var app3 = new Vue({
        el: '#app-3',
        data: {
            seen: true
        }
    })

    var app4 = new Vue({
        el: '#app-4',
        data: {
            todos: [
                { text: 'Learn JavaScript' },
                { text: 'Learn Vue' },
                { text: 'Life' },
                { text: 'Build something awesome' }
            ]
        }
    })

    var app5 = new Vue({
        el: '#app-5',
        data: {
            message: 'Hello Vue.js!'
        },
        methods: {
            reverseMessage: function() {
                this.message = this.message.split('').reverse().join('')
            }
        }
    })


    var app6 = new Vue({
        el: '#app-6',
        data: {
            message6: '',
        },
        methods: {
            upper: function() {
                console.log("hola?");
                this.message6 = this.message6.toUpperCase();
            }
        }
    });


    window.app = app; // just put the Vue instance available in the JS console (don't do this in production)
    window.app3 = app3; // just put the Vue instance available in the JS console (don't do this in production)
    window.app6 = app6; // just put the Vue instance available in the JS console (don't do this in production)
})(window);