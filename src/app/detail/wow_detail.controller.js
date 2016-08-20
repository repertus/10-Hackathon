(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('DetailController', DetailController);

    DetailController.$inject = ['searchData', '$stateParams', 'multiList'];

    /* @ngInject */
    function DetailController(searchData, $stateParams, multiList) {
        var detail = this;
        detail.bossez = [];
        // vm.title = 'DetailController';

        searchData.getData($stateParams.characId, $stateParams.realmId).then(
            function(data){
                var b = 0;
                // var bosses = data.progression.raids.bosses;
                var bossMultipliers = multiList.getMulti(); 
                var compact = 0;
                var hfcResult = 0;
                var heroic = 'heroicKills';
                var heroicTotal = 0;
                var lfr = 'lfrKills';
                var lfrTotal = 0;
                var mythic = 'mythicKills';
                var mythicTotal = 0;
                var normal = 'normalKills'
                var normalTotal = 0;
                var q = 0;
                var r = 0;
                var raids = data.progression.raids;

                // Return data from the $HTTP call
                detail.data = data;


                for (r = 0; r < raids.length; r++) {
                    if (raids[r].id === 7545) {
                        for (b = 0; b < raids[r].bosses.length; b++) {
                            for (q = 0; q < bossMultipliers.length; q++) {
                                if (bossMultipliers[q].id === raids[r].bosses[b].id) {
                                    lfrTotal = lfrTotal + raids[r].bosses[b].lfrKills;
                                    normalTotal = normalTotal + raids[r].bosses[b].normalKills;
                                    heroicTotal = heroicTotal + raids[r].bosses[b].heroicKills;
                                    mythicTotal = mythicTotal + raids[r].bosses[b].mythicKills;
                                    detail.bossez.push({'name'   : raids[r].bosses[b].name,
                                                        'lfr'    : raids[r].bosses[b].lfrKills,
                                                        'normal' : raids[r].bosses[b].normalKills,
                                                        'heroic' : raids[r].bosses[b].heroicKills,
                                                        'mythic' : raids[r].bosses[b].mythicKills});
                                    break;
                                }
                            }
                        }
                        break;
                    }
                }

                detail.bossez.push({
                    'name'          : 'Total Kills by Type',
                    'lfr'      : lfrTotal,
                    'normal'   : normalTotal,
                    'heroic'   : heroicTotal,
                    'mythic'   : mythicTotal,
                });









            }, 
            function(error){
                console.log(error);
            });
    }
})();
