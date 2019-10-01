(function(){
    console.log('start app', {App});
    const Person = App.Models.Person;
    const Animal = App.Models.Animal;
    
    const person1 = new Person('John', 'Doh');
    const person2 = new Person('Jeanne', 'Doh');
    const nala = new Animal('Nala');

    console.log({
        person1,
        person2,
        nala
    });
})();