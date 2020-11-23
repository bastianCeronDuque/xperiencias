let app = new Vue({
    el: ".container",
    data: {
        errors: [],
        nombre: null,
        mail: null,
        cel: null,
        direccion: null,
        img1: "img/img1.png",
    },
    methods: {
        checkForm: function (e) {
            if (this.nombre && this.cel && this.mail) {
                return true;
            }

            this.errors = [];

            if (!this.nombre) {
                this.errors.push('El nombre es obligatorio.');
            }
            if (!this.cel) {
                this.errors.push('Ingresa tu celular es obligatorio.');
            }
            if (!this.mail) {
                this.errors.push('El mail es obligatorio.');
            }

            e.preventDefault();
        }
    },
    computed: {



    }
})