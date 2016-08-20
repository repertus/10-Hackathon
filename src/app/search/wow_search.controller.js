(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('SearchController', SearchController);

    SearchController.$inject = ['searchData', '$q'];

    /* @ngInject */
    function SearchController(searchData, $q) {
        var vm = this;
        vm.data = {};
        vm.getData = getData;
        // vm.realmOptions = [];





        ////////////////

        //Calls the factory for the Realm API drop down data
        // vm.realmOptions = searchRealm.getData();

        function getData() {
            searchData.getData(vm.charIdOne).then(
                function(data) {

                    var bossMultipliers = [{
                        "name": "Hellfire Asault",
                        "id": 93023,
                        "lfrVal": 0.05,
                        "normVal": 0.5,
                        "heroicVal": 1,
                        "mythicVal": 3
                    }, {
                        "name": "Iron Reaver",
                        "id": 90199,
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

                    // console.log(bossMultipliers);

                    vm.data.charOne = data;
                    var b = 0;
                    var bosses = data.progression.raids.bosses;
                    var compact = 0;
                    var hfcResult = 0;
                    var heroic = 'heroicKills';
                    var lfr = 'lfrKills';
                    var mythic = 'mythicKills';
                    var normal = 'normalKills'
                    var q = 0;
                    var r = 0;
                    var raids = data.progression.raids;


                    for (r = 0; r < raids.length; r++) {
                        if (raids[r].id === 7545) {
                            // console.log(raids[r].bosses.length);
                            for (b = 0; b < raids[r].bosses.length; b++) {
                                for (q = 0; q < bossMultipliers.length; q++) {
                                    if (bossMultipliers[q].id === raids[r].bosses[b].id) {
                                        var hfcResult = hfcResult + (bossMultipliers[q].lfrVal * raids[r].bosses[b].lfrKills) +
                                            (bossMultipliers[q].normVal * raids[r].bosses[b].normalKills) +
                                            (bossMultipliers[q].heroicVal * raids[r].bosses[b].heroicKills) +
                                            (bossMultipliers[q].mythicVal * raids[r].bosses[b].mythicKills);
                                        break;
                                    }
                                }

                            }
                            break;
                        }
                    }
                    console.log(hfcResult);
                    console.log(raids[r].bosses[b]);
                },
                function(error) {
                    console.log(error);
                });
            searchData.getData(vm.charIdTwo).then(
                function(data) {
                    vm.data.charTwo = data;
                },
                function(error) {
                    console.log(error);
                });
        }


        // function getData() {
        //     searchData.getData(vm.charIdOne).then(
        //         function(data) {
        //             vm.data.charOne = data;
        //         }, 
        //         function(error) {
        //             console.log(error);
        //         });
        //     searchData.getData(vm.charIdTwo).then(
        //         function(data) {
        //             vm.data.charTwo = data;
        //         }, 
        //         function(error) {
        //             console.log(error);
        //         });
        // }

        function requestCharacter(id, vmObject) {
            searchData.getData(id).then(
                function(data) {
                    vmObject = data;
                    console.log(vmObject);
                },
                function(error) {
                    console.log(error);
                });
        }
    }
})();
