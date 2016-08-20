(function() {
    'use strict';

    angular
        .module('myApp')
        .factory('multiList', multiList);


    /* @ngInject */
    function multiList() {
        var service = {
            getMulti: getMulti
        };
        return service;

        /////////////////////////////////////////////
        // JSON object that contains the 		   //
        // multiplier utilized for scoring players //
        // //////////////////////////////////////////
        function getMulti() {
        	return [
    		{	
    			"name": "Hellfire Asault",
                "id": 93023,
                "lfrVal": 0.05,
                "normVal": 0.5,
                "heroicVal": 1,
                "mythicVal": 3
            }, {
                "name": "Iron Reaver",
                "id": 90284,
                "lfrVal": 0.05,
                "normVal": 0.5,
                "heroicVal": 0.75,
                "mythicVal": 3
            }, {
                "name": "Kormrok",
                "id": 90435,
                "lfrVal": 0.05,
                "normVal": 0.5,
                "heroicVal": 0.75,
                "mythicVal": 3
            }, {
                "name": "Hellfire High Council",
                "id": 92146,
                "lfrVal": 0.05,
                "normVal": 0.5,
                "heroicVal": 0.75,
                "mythicVal": 3
            }, {
                "name": "Kilrogg Deadeye",
                "id": 90378,
                "lfrVal": 0.05,
                "normVal": 0.5,
                "heroicVal": 0.75,
                "mythicVal": 3
            }, {
                "name": "Gorefiend",
                "id": 90199,
                "lfrVal": 0.05,
                "normVal": 0.5,
                "heroicVal": 1.25,
                "mythicVal": 4
            }, {
                "name": "Shadow-Lord Iskar",
                "id": 90316,
                "lfrVal": 0.05,
                "normVal": 0.5,
                "heroicVal": 1.25,
                "mythicVal": 4
            }, {
                "name": "Socrethar the Eternal",
                "id": 90296,
                "lfrVal": 0.05,
                "normVal": 0.5,
                "heroicVal": 0.75,
                "mythicVal": 3
            }, {
                "name": "Tyrant Velhari",
                "id": 90269,
                "lfrVal": 0.05,
                "normVal": 0.5,
                "heroicVal": 1.25,
                "mythicVal": 4
            }, {
                "name": "Fel Lord Zakuun",
                "id": 89890,
                "lfrVal": 0.05,
                "normVal": 0.5,
                "heroicVal": 0.75,
                "mythicVal": 3
            }, {
                "name": "Xhul'horac",
                "id": 93068,
                "lfrVal": 0.05,
                "normVal": 0.5,
                "heroicVal": 1.5,
                "mythicVal": 4.5
            }, {
                "name": "Mannoroth",
                "id": 91349,
                "lfrVal": 0.05,
                "normVal": 0.5,
                "heroicVal": 2,
                "mythicVal": 5
            }, {
                "name": "Archimonde",
                "id": 91331,
                "lfrVal": 0.1,
                "normVal": 0.75,
                "heroicVal": 2,
                "mythicVal": 5
            }];
        }
    }
})();