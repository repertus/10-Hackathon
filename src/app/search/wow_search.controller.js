(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('SearchController', SearchController);

    SearchController.$inject = ['searchData', '$q', 'multiList', 'toastr'];


    function SearchController(searchData, $q, multiList, toastr) {
        var vm = this;
        vm.data = {};
        vm.getData = getData;


        ////////////////


        function getData() {
            //Calls the factory for Charater 1 user WoW data
            searchData.getData(vm.charIdOne, vm.realmOne).then(
                function(data) {
                    var b = 0;
                    var bosses = data.progression.raids.bosses;
                    var bossMultipliers = multiList.getMulti(); //Calls the multiplier object through factory 
                    var compact = 0;
                    var hfcResult = 0;
                    var heroic = 'heroicKills';
                    var lfr = 'lfrKills';
                    var mythic = 'mythicKills';
                    var normal = 'normalKills'
                    var q = 0;
                    var r = 0;
                    var raids = data.progression.raids;

                    // Return data from the $HTTP call
                    vm.data.charOne = data;

                    // Calculates the score for character based on multipliers for Hellfire Citadel kills
                    for (r = 0; r < raids.length; r++) {
                        if (raids[r].id === 7545) {
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
                    vm.charOneResults = hfcResult;                  
                    console.log(hfcResult);
                },
                function(error) {
                    console.log(error);
            });

            //Calls the factory for Charater 2 user WoW data
            searchData.getData(vm.charIdTwo, vm.realmTwo).then(
                function(data) {
                    var b = 0;
                    var bosses = data.progression.raids.bosses;
                    var bossMultipliers = multiList.getMulti();
                    var compact = 0;
                    var hfcResult = 0;
                    var heroic = 'heroicKills';
                    var lfr = 'lfrKills';
                    var mythic = 'mythicKills';
                    var normal = 'normalKills'
                    var q = 0;
                    var r = 0;
                    var raids = data.progression.raids;

                    // Return data from the $HTTP call
                    vm.data.charTwo = data;

                    // Calculates the score for character based on multipliers for Hellfire Citadel kills
                    for (r = 0; r < raids.length; r++) {
                        if (raids[r].id === 7545) {
                            for (b = 0; b < raids[r].bosses.length; b++) {
                                for (q = 0; q < bossMultipliers.length; q++) {
                                    console.log(raids[r].bosses[b].name);
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
                    vm.charTwoResults = hfcResult;           
                    console.log(hfcResult);
                    // console.log(raids[r].bosses[b]);
                },
                function(error) {
                    console.log(error);
            });
        }
    }
})();


// Future snippet code
// function requestCharacter(id, vmObject) {
//     searchData.getData(id).then(
//         function(data) {
//             vmObject = data;
//             console.log(vmObject);
//         },
//         function(error) {
//             console.log(error);
//         });
// }
