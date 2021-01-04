function run() {
    new Vue({
        el: '#app',
        data: {
            classes: [],
            classService: null,
            message: ''
        },
        created: function() {
            this.classService = theClasses();
            this.classService.get().then(response => (this.classes = response.data));
        },
        methods: {
            deleteClass: function(id) {
                console.log('HTTP DELETE spre backend, class: ' + id);
                this.classService.remove(id).then(response => {
                    this.classService.get().then(response => (this.classs = response.data));
                });
            },
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    run();
});