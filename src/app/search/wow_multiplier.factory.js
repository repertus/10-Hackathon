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
                "normVal": 0.25,
                "heroicVal": 1,
                "mythicVal": 3,
                "http": "http://images.staticjw.com/wor/5298/siegemaster-martak.png"
            }, {
                "name": "Iron Reaver",
                "id": 90284,
                "lfrVal": 0.05,
                "normVal": 0.25,
                "heroicVal": 0.75,
                "mythicVal": 3,
                "http": "http://images.staticjw.com/wor/3977/boss-pic.png"
            }, {
                "name": "Kormrok",
                "id": 90435,
                "lfrVal": 0.05,
                "normVal": 0.25,
                "heroicVal": 0.75,
                "mythicVal": 3,
                "http": "http://images.staticjw.com/wor/4372/kormrok.jpg"
            }, {
                "name": "Hellfire High Council",
                "id": 92146,
                "lfrVal": 0.05,
                "normVal": 0.25,
                "heroicVal": 0.75,
                "mythicVal": 3,
                "http": "http://images.staticjw.com/wor/9247/all-three.jpg"
            }, {
                "name": "Kilrogg Deadeye",
                "id": 90378,
                "lfrVal": 0.05,
                "normVal": 0.25,
                "heroicVal": 0.75,
                "mythicVal": 3,
                "http": "http://images.staticjw.com/wor/7990/killlrogg.png"
            }, {
                "name": "Gorefiend",
                "id": 90199,
                "lfrVal": 0.05,
                "normVal": 0.25,
                "heroicVal": 1.25,
                "mythicVal": 4,
                "http": "http://images.staticjw.com/wor/6974/gooree.jpg"
            }, {
                "name": "Shadow-Lord Iskar",
                "id": 90316,
                "lfrVal": 0.05,
                "normVal": 0.25,
                "heroicVal": 1.25,
                "mythicVal": 4,
                "http": "http://images.staticjw.com/wor/5360/lordie.png"
            }, {
                "name": "Socrethar the Eternal",
                "id": 90296,
                "lfrVal": 0.05,
                "normVal": 0.25,
                "heroicVal": 0.75,
                "mythicVal": 3,
                "http": "http://images.staticjw.com/wor/1602/boss-image.jpg"
            }, {
                "name": "Tyrant Velhari",
                "id": 90269,
                "lfrVal": 0.05,
                "normVal": 0.25,
                "heroicVal": 1.25,
                "mythicVal": 4,
                "http": "http://images.staticjw.com/wor/6228/tyrand.png"
            }, {
                "name": "Fel Lord Zakuun",
                "id": 89890,
                "lfrVal": 0.05,
                "normVal": 0.25,
                "heroicVal": 0.75,
                "mythicVal": 3,
                "http": "http://images.staticjw.com/wor/1185/fel-lord.png"
            }, {
                "name": "Xhul'horac",
                "id": 93068,
                "lfrVal": 0.05,
                "normVal": 0.25,
                "heroicVal": 1.5,
                "mythicVal": 4.5,
                "http": "http://images.staticjw.com/wor/7528/xhulhorac.png"
            }, {
                "name": "Mannoroth",
                "id": 91349,
                "lfrVal": 0.05,
                "normVal": 0.25,
                "heroicVal": 2,
                "mythicVal": 5,
                "http": "http://images.staticjw.com/wor/3479/manno-fulll.png"
            }, {
                "name": "Archimonde",
                "id": 91331,
                "lfrVal": 0.1,
                "normVal": 0.75,
                "heroicVal": 2,
                "mythicVal": 5,
                "http": "http://images.staticjw.com/wor/3988/archie.png"
            }];
        }
    }
})();