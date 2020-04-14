(() => {

    angular
        .module('app')
        .controller('HomeController', HomeController);

    function HomeController($http) {
        const vm = this;
        vm.header = 'Users';
        vm.$onInit = onInit;
        vm.users = [];
        vm.resetBalance = resetBalance;

        activate();


        function activate() {
            // Resolve start-up logic
        }

        function onInit() {
            getData().then(result => {
                vm.users = result;
                vm.users.forEach(user => {
                    // Convert date string to actual date
                    user.registered = new Date(user.registered.replace(" ", ""));

                    // Convert string balance to actual number
                    user.balance = Number(user.balance.replace(",", ""));
                });
            })

            // Initialization logic that relies on bindings being present
            // should be put in this method, which is guarranteed to
            // always be called after the bindings have been assigned.
        }

        function getData() {
            return $http.get("./users.json")
                .then(response => response.data);
        }

        function resetBalance() {

            vm.users.forEach(user => {
                user.balance = 0;
            })
        }
    }

})();