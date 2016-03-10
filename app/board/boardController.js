angular.module('lightsOn.board',[])
    .controller('boardController', function($scope){
        $scope.titol = 'Lights ON'

        $scope.lightOn = function($event){
            //console.dir($event)
            console.log('light!')
        }
    })
