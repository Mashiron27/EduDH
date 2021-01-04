function run() {
    new Vue({
        el: '#update',
        data: {
            id: '',
            message: '',
            classs: {}
        },
        created: function() {

            let uri = window.location.search.substring(1);
            let params = new URLSearchParams(uri);
            this.id = params.get("id");

            axios.get('http://localhost:3000/classs/' + this.id).then(
                (response) => {
                    this.classs = response.data;
                }
            );
        },
        methods: {
            update: function() {
                return axios.post('http://localhost:3000/classs', this.classs).then(
                    (response) => {
                        this.message = response.data; // saved
                        alert("Changes have been saved saved!");
                        window.location = 'details.html';
                    }
                );
            }
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    run();
});