(function(){

    console.log('declare Person');
    const nsModels = window.setNamespace('App.Models')
    
    class Person {
        public firstname;
        public lastname;

        constructor(firstname, lastname) {
            this.firstname = firstname;
            this.lastname = lastname;
        }
    }

    nsModels.Person = Person;
})();