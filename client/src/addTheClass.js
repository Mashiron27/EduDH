function run() {
    new Vue({
        el: '#addClassNamePage',
        data: {
            id: 'default',
            classs: {}
        },
        created: function() {},
        methods: {
            addClass: function() {

                this.classs = {
                    "id": 0,
                    "className": document.getElementById("input-name").value,
                    "classColumns": document.getElementById("in-columns").value,
                    "classRows": document.getElementById("in-rows").value,
                };

                return axios.put('http://localhost:3000/classes', this.classs).then(
                    (response) => {
                        this.message = response.data;
                        console.log(this.message); // saved
                        alert("The New Classroom Had Been Added!");
                        window.location = 'details.html';
                    }
                );

            },
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    run();
});