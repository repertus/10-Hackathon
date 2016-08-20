(function() {
    'use strict';


    angular
        .module('myApp', ['ui.router'])
        .config(function($urlRouterProvider, $stateProvider) {
        	
            $urlRouterProvider.otherwise('/search');

            $stateProvider
        		.state('search', {
    				url: '/search',
    				templateUrl: '/src/app/search/wow.search.html',
    				controller: "SearchController as search"
        		})
        		.state('detail', {
                    url: '/detail/:characId/:realmId',
        		    templateUrl: '/src/app/detail/wow.detail.html',
                    controller: 'DetailController as detail'
                })
        });
})();