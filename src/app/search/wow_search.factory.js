(function() {
    'use strict';

    angular
        .module('myApp')
        .factory('searchData', searchData);

    searchData.$inject = ['$http', '$q', 'keys'];

    /* @ngInject */
    function searchData($http, $q, keys) {
        var service = {
            getData: getData
        };
        return service;

        ////////////////

        function getData(id, realm) {
        	var defer = $q.defer();
        	$http.get('https://us.api.battle.net/wow/character/' + realm + '/' + id + '?fields=progression&locale=en_US&apikey=' + keys.wow_blizzard).then(
        		function(response) {
        			if (typeof response.data === 'object') {
        				defer.resolve(response.data);
        			} else {	
        				defer.reject(response.data);
        			}
        		}, 
        		function(error) {
        			defer.reject(error);
        		}
    		);

    		return defer.promise;
        }
    }
})();