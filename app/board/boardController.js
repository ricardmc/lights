angular.module('lightsOn.board',[])
    .controller('boardController', function($scope){
        $scope.titol = 'Lights ON'

        $scope.lightClicked = function(lightId){
            console.log('id: '+lightId)
        }
    })
