(function () {
    console.log('declare Animal');
    const nsModels = window.setNamespace('App.Models')

    class Animal {

        public name;

        constructor(name) {
            this.name = name;
        }
    }

    nsModels.Animal = Animal;
})();