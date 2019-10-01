(function () {
    console.log('declare Animal');
    const nsModels = setNamespace('App.Models')

    class Animal {
        constructor(name) {
            this.name = name;
        }
    }

    nsModels.Animal = Animal;
})();