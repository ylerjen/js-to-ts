(function(){

    console.log('declare Person');
    const nsModels = setNamespace('App.Models')
    
    class Person {
        constructor(firstname, lastname) {
            this.firstname = firstname;
            this.lastname = lastname;
        }
    }

    nsModels.Person = Person;
})();