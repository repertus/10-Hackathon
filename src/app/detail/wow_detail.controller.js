(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('DetailController', DetailController);

    DetailController.$inject = [];

    /* @ngInject */
    function DetailController() {
        var vm = this;
        vm.title = 'DetailController';

        activate();

        ////////////////

        function activate() {
        }
    }
})();