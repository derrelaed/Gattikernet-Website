const app = Vue.createApp({
    data() {
        return {
            userName: '',
            userEmail: '',
            formSubmitted: false,
            submissionMessage: 'Das Formular wurde erfolgreich gesendet!'
        };
    },
    methods: {
        submitForm() {
            // Hier können zusätzliche Validierungen oder API-Aufrufe eingefügt werden.
            this.formSubmitted = true;

            // Setzen Sie die Formulardaten zurück oder führen Sie andere Aktionen aus
            this.userName = '';
            this.userEmail = '';
        }
    }
});

app.mount('#app');
